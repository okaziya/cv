import React from "react";
import { getTranslations } from "../../lib/getTranslations";

import { Locale } from "../../types";

import SkillCategory from "./SkillCategory";

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function SkillsSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  const skillCategories: SkillCategory[] = [
    {
      title: translations.skills, // Dynamically translated
      skills: [
        "Agile Web Development",
        "tRPC",
        "useQuery",
        "REST API",
        "Lambda",
        "Step Functions",
        "CI/CD Pipeline",
        "Jest",
        "Vitest",
        "Storybook",
      ],
    },
    {
      title: translations.codeLanguages,
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Go",
        "Rust",
        "C++",
        "SQL",
        "GraphQL",
        "HTML & CSS",
        "Shell Scripting",
      ],
    },
    {
      title: translations.tools,
      skills: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "Git",
        "GitHub Actions",
        "VS Code",
        "JIRA",
        "Postman",
        "Webpack",
        "ESLint",
      ],
    },
    {
      title: translations.databases,
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "DynamoDB",
        "Redis",
        "SQLite",
        "Elasticsearch",
        "Supabase",
        "Firebase Firestore",
        "PlanetScale",
      ],
    },
  ];

  return (
    <section className="skills-section row flex-wrap">
      {skillCategories.map(({ title, skills }, index) => (
        <>
          <SkillCategory key={index} title={title} skillList={skills} />
          {index === 1 && <div className="w-100"></div>}
          {/* Row break after the second item */}
        </>
      ))}
    </section>
  );
}
