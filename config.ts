import { SkillCategoryKey } from "./types";

export const CONTACT_INFO = {
    name: "Liza Blomdahl-Olsevskaja",
    email: "liza.blomdahl@gmail.com",
    phone: "0730-500 244",
    linkedin: "https://www.linkedin.com/in/liza-blomdahl/",
    github: "https://github.com/okaziya",
  };

  export const SITE_INFO = {
    title: "CV | Liza Blomdahl-Olsevskaja - Full Stack Developer",
    description: "Professional CV of Liza Blomdahl-Olsevskaja – a skilled Full Stack Developer.",
  };

  export const SKILL_CATEGORIES: { titleKey: SkillCategoryKey; skills: string[] }[] = [
    {
      titleKey: "skills",
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
      titleKey: "codeLanguages",
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
      titleKey: "tools",
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
      titleKey: "databases",
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