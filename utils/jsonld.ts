import { Locale } from "../types";
import { CONTACT_INFO, SITE_URL } from "../config";
import en from "../locales/en";
import sv from "../locales/sv";
const locales = { en, sv } as const;

function parseCompanyTitle(companyTitle: string): { name: string; location?: string } {
  const separatorIndex = companyTitle.indexOf(" – ");
  if (separatorIndex === -1) return { name: companyTitle };
  return {
    name: companyTitle.slice(0, separatorIndex),
    location: companyTitle.slice(separatorIndex + 3),
  };
}

function parseDateRange(date: string): { startDate: string; endDate?: string } {
  const [start, end] = date.split("–").map((d) => d.trim());
  const isOngoing = !end || end === "Present" || end === "pågående";
  return { startDate: start, ...(isOngoing ? {} : { endDate: end }) };
}

function parseAssignmentsText(text: string) {
  return text
    .split("----")
    .filter((b) => b.trim())
    .map((block) => {
      const client = block.match(/\*\*UPPDRAGSGIVARE:\*\*\s*(.+)/)?.[1]?.trim() || "";
      const assignmentMatch = block.match(/\*\*UPPDRAG \(PERIOD\):\*\*\s*(.+?)\s*\((\d{4}-\d{2})–(\d{4}-\d{2})\)/);
      const role = assignmentMatch?.[1]?.trim() || "";
      const startDate = assignmentMatch?.[2] || "";
      const endDate = assignmentMatch?.[3] || undefined;
      const description = block.match(/\*\*BESKRIVNING:\*\*\n([\s\S]*?)(?=\n\*\*TEKNOLOGIER:|\n*$)/)?.[1]?.trim() || "";
      const technologies = block.match(/\*\*TEKNOLOGIER:\*\*\s*(.+)/)?.[1]?.trim() || "";
      const keywords = block.match(/\*\*NYCKELORD:\*\*\s*(.+)/)?.[1]?.trim() || "";
      return { client, role, startDate, endDate, description, technologies, keywords };
    });
}

export function generateJsonLdForConsultantCv(locale: Locale) {
  const data = locales[locale];

  const allAssignments = [
    ...data.workExperience.experiences.flatMap((exp) =>
      exp.assignmentsText ? parseAssignmentsText(exp.assignmentsText) : []
    ),
    ...data.education.degrees.flatMap((deg) => (deg.assignmentsText ? parseAssignmentsText(deg.assignmentsText) : [])),
  ];

  const assignments = allAssignments.map((a) => {
    const descParts = [
      a.description,
      a.technologies && `Teknologier: ${a.technologies}`,
      a.keywords && `Nyckelord: ${a.keywords}`,
    ].filter(Boolean);
    return {
      "@type": "OrganizationRole",
      roleName: a.role,
      startDate: a.startDate,
      ...(a.endDate && { endDate: a.endDate }),
      description: descParts.join("\n\n"),
      memberOf: {
        "@type": "Organization",
        name: a.client,
      },
    };
  });

  const education = data.education.degrees.map((deg) => {
    const { name, location } = parseCompanyTitle(deg.companyTitle);
    const isUniversity = /^(Unicorn University|Prague University)/i.test(name);
    return {
      "@type": isUniversity ? "CollegeOrUniversity" : "EducationalOrganization",
      name,
      ...(location && { location: { "@type": "Place", name: location } }),
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage: locale,
    url: `${SITE_URL}/${locale}`,
    mainEntity: {
      "@type": "Person",
      name: CONTACT_INFO.name,
      jobTitle: data.heroSection.title.replace(/\u00AD/g, ""),
      description: data.heroSection.description,
      url: `${SITE_URL}/`,
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phone,
      image: `${SITE_URL}/profile-photo.png`,
      sameAs: [CONTACT_INFO.linkedin, CONTACT_INFO.github],
      knowsAbout: data.skillsSection.categories.flatMap((cat) => cat.items),
      knowsLanguage: data.languagesSection.languages.map((lang) => lang.name),
      memberOf: assignments,
      alumniOf: education,
    },
  };
}

export function generateJsonLdForEmploymentCv(locale: Locale) {
  const data = locales[locale];

  const employments = data.workExperience.experiences.map((exp) => {
    const { name, location } = parseCompanyTitle(exp.companyTitle);
    const { startDate, endDate } = parseDateRange(exp.date);
    return {
      "@type": "OrganizationRole",
      roleName: exp.jobTitle,
      startDate,
      ...(endDate && { endDate }),
      description: exp.highlights,
      memberOf: {
        "@type": "Organization",
        name,
        ...(location && {
          location: { "@type": "Place", name: location },
        }),
      },
    };
  });

  const education = data.education.degrees.map((deg) => {
    const { name, location } = parseCompanyTitle(deg.companyTitle);
    const isUniversity = /^(Unicorn University|Prague University)/i.test(name);
    return {
      "@type": isUniversity ? "CollegeOrUniversity" : "EducationalOrganization",
      name,
      ...(location && { location: { "@type": "Place", name: location } }),
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage: locale,
    url: `${SITE_URL}/${locale}`,
    mainEntity: {
      "@type": "Person",
      name: CONTACT_INFO.name,
      jobTitle: data.heroSection.title.replace(/\u00AD/g, ""),
      description: data.heroSection.description,
      url: `${SITE_URL}/`,
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phone,
      image: `${SITE_URL}/profile-photo.png`,
      sameAs: [CONTACT_INFO.linkedin, CONTACT_INFO.github],
      knowsAbout: data.skillsSection.categories.flatMap((cat) => cat.items),
      knowsLanguage: data.languagesSection.languages.map((lang) => lang.name),
      memberOf: employments,
      alumniOf: education,
    },
  };
}
