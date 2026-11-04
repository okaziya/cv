import { Metadata } from "next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CONTACT_INFO, SITE_URL } from "../../config";
import { LocaleProvider } from "../../context/LocaleContext";
import en from "../../locales/en";
import sv from "../../locales/sv";
import { Locale } from "../../types";
import { generateJsonLdForEmploymentCv, generateJsonLdForConsultantCv } from "../../utils/jsonld";
const locales = { en, sv } as const;

export async function generateStaticParams(): Promise<{ locale: Locale }[]> {
  return [{ locale: "en" }, { locale: "sv" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const data = locales[locale];
  return {
    title: `${CONTACT_INFO.name} – ${data.heroSection.title.replace(/\u00AD/g, "")}`,
    description: data.heroSection.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        sv: `${SITE_URL}/sv`,
      },
    },
    openGraph: {
      title: `${CONTACT_INFO.name} – ${data.heroSection.title.replace(/\u00AD/g, "")}`,
      description: data.heroSection.description,
      url: `${SITE_URL}/${locale}`,
      siteName: CONTACT_INFO.name,
      images: [{ url: `${SITE_URL}/profile-photo.png` }],
      locale: locale === "sv" ? "sv_SE" : "en_US",
      type: "profile",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  const jsonLd = locale === "sv" ? generateJsonLdForConsultantCv(locale) : generateJsonLdForEmploymentCv(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocaleProvider locale={locale}>
        <Header />
        <main className="main-content m-auto">{children}</main>
        <Footer />
      </LocaleProvider>
    </>
  );
}
