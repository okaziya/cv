import ShowDetails from "../components/ShowDetails";

const sv = {
  name: "Liza Blomdahl-Olsevskaja – Mitt CV",
  skills: "Färdigheter",
  codeLanguages: "Programmeringsspråk",
  downloadCv: "Ladda ner CV",
  showDetails: "Visa detaljer",
  heroSection: {
    title: "Fullstack\u00ADutvecklare",
    description:
      "En engagerad Fullstack-utvecklare med fokus på frontend och över fem års erfarenhet. Skicklig i JavaScript, " +
      "React, TypeScript och MongoDB. Jag har bidragit till fler än 30 projekt, inklusive inom fintech.",
    photoAlt: "Foto av Liza Blomdahl, en fullstackutvecklare",
  },
  contact: {
    title: "Kontakt",
    phone: "Ring mig",
    email: "Skicka ett e-postmeddelande",
    linkedin: "Kontakta på LinkedIn",
    github: "Följ mig på GitHub",
  },
  images: {
    logoAlt: "Personlig logotyp som representerar professionalism",
  },
  skillsSection: {
    title: "Färdigheter",
    categories: {
      skills: "Allmänna kunskaper",
      codeLanguages: "Programmeringsspråk",
      tools: "Verktyg och ramverk",
      databases: "Databaser",
    },
  },
  workExperience: {
    title: "Erfarenhet",
    experiences: [
      {
        jobTitle: "Fullstackutvecklare",
        companyTitle: "Purple Technology – Brno, Tjeckien & Remote",
        date: "2022-04–2024-09",
        highlights:
          "- Bidrog avsevärt till utvecklingen av ett internt CRM-system som fullstackutvecklare.\n" +
          "- Var involverad i hela utvecklingscykeln, från teknisk analys och estimering till backend- och frontend-" +
          "integration.\n" +
          "- Deltog i design och implementering av nya funktioner.\n" +
          "- Följde en strukturerad utvecklingsprocess, inklusive enhetstestning och acceptanstestning.\n" +
          "- Arbetade med CI/CD-pipelines för att säkerställa god kvalitet och effektiv leverans.\n" +
          "- Bidrog till utvecklingen av en klientportal för forex, liknande en internetbank.\n" +
          "- Fokuserade på att förbättra portalens funktioner genom migrering från GraphQL till tRPC.\n",
        description: null,
        assignmentsText:
          "----\n" +
          "\n" +
          "**UPPDRAGSGIVARE:** Purple Technology\n" +
          "\n" +
          "**UPPDRAG (PERIOD):** Frontendutvecklare (2023-12–2024-09)\n" +
          "\n" +
          "**BESKRIVNING:**\n" +
          "Liza gick in som frontendutvecklare för att bygga användarportalen till [Axiory](https://www.axiory.com), " +
          "en fintech-satsning med fokus på valutahandel/forex. Hon arbetade i nära samarbete med teamen inom " +
          "backend, iOS/Android och QA med att färdigställa funktionalitet för att ta kunderna genom onboarding-" +
          "processen (avtal, KYC m.m.), och se till att de kunde komma igång med sina trading-verktyg. En betydande " +
          "del av uppdraget ägnades åt felsökning med backend-teamet, buggfixar och stabilisering av tjänsten. Mot " +
          "slutet av uppdraget utvecklade hon även ett internt verktyg för att ställa databasfrågor kring " +
          "kundbeteenden och compliance.\n" +
          "\n" +
          "**TEKNOLOGIER:** React, TypeScript, Styled Components, Apollo GraphQL, tRPC, Postico, MongoDB, AWS " +
          "Lambda, AWS AppConfig, Git Monorepo, Linear, GitHub, VS Code, GiHub Actions\n" +
          "\n" +
          "**NYCKELORD:** FinTech, forex/FX, trading-plattform, användarhantering, UX, compliance, bank och finans, " +
          "autentisering & auktorisation, Reusable Components, AWS, CI/CD, Serverless, Agile, " +
          "marknadsföringskampanjer\n" +
          "\n" +
          "----\n" +
          "\n" +
          "**UPPDRAGSGIVARE:** Purple Technology\n" +
          "\n" +
          "**UPPDRAG (PERIOD):** Fullstackutvecklare (2022-04–2023-12)\n" +
          "\n" +
          "**BESKRIVNING:**\n" +
          "Liza kom in i rollen som fullstack-utvecklare för att bygga ett nytt CRM för att hålla reda på användare, " +
          "transaktioner och kundkonton till ett fintech-projekt. Bland huvuduppgifterna ingick det att integrera " +
          "olika backend-system för att skapa realtidssökningar mot MongoDB Atlas, optimera databasfrågor för god " +
          "prestanda och arbeta med datakvalitet. Ett av Lizas varmaste minnen från den här tiden är ett initiativ " +
          "för att tillhandahålla compliance-teamet med ett rapporteringsverktyg för beslutsstöd kring insättningar." +
          "\n\n" +
          "**TEKNOLOGIER:** React, TypeScript, Next.js, AWS S3, AWS Cognito, AWS Lambda, MongoDB Atlas, Postgres, " +
          "SQL, Apollo GraphQL, tRPC, AtlasSearch, Jest, Git Monorepo, Jira, Linear, GitHub, VS Code, CircleCI\n" +
          "\n" +
          "**NYCKELORD:** CRM, FinTech, query-optimering, UX, compliance, prestandatestning, lösningsarkitektur, " +
          "datamodellering, datakvalitet, databas-design, CI/CD, Serverless, Agile\n" +
          "\n",
        internalProjectNotes: null,
      },
      {
        jobTitle: "Frontendutvecklare",
        companyTitle: "Accenture – Distans",
        date: "2021-10–2022-02",
        highlights:
          "- Fokuserade främst på att utveckla återanvändbara komponenter för integration i Storybook.\n" +
          "- Designade och implementerade komponenter för att förbättra UI-konsistens.\n",
        description: null,
        assignmentsText:
          "----\n" +
          "\n" +
          "**UPPDRAGSGIVARE:** Accenture\n" +
          "\n" +
          "**UPPDRAG (PERIOD):** Frontendutvecklare (2021-10–2022-02)\n" +
          "\n" +
          "**BESKRIVNING:**\n" +
          "Liza lånades in som frontend-utvecklare till ett projekt för Škoda via Titans Consulting och Accenture. " +
          "Tillsammans med ett remote-team med ett halvdussin utvecklare i Italien så arbetade hon med att designa " +
          "och utveckla återanvändbara komponenter för Škodas Storybook. UI-komponenterna implementerade kundens " +
          "designsystem med stöd för alla förekommande layouter och upplösningar.\n" +
          "\n" +
          "**TEKNOLOGIER:** Storybook, React, TypeScript, SASS, GitHub, VS Code, Trello\n" +
          "\n" +
          "**NYCKELORD:** Återanvändbara UI-komponenter, responsiv design, skalbarhet, designsystem, accessibility\n",
        internalProjectNotes: null,
      },
      {
        jobTitle: "Frontendutvecklare",
        companyTitle: "iQuest s.r.o. – Prag, Tjeckien",
        date: "2019-06–2021-10",
        highlights:
          "- Specialiserad på frontendutveckling med erfarenhet av backendutveckling.\n" +
          "- Utvecklade responsiv styling för webb- och mobilprojekt.\n" +
          "- Arbetade med olika projekt och olika programmeringsspråk och bibliotek.\n",
        description: null,
        assignmentsText:
          "----\n" +
          "\n" +
          "**UPPDRAGSGIVARE:** iQuest s.r.o.\n" +
          "\n" +
          "**UPPDRAG (PERIOD):** Fullstack-utvecklare (2021-04–2021-10)\n" +
          "\n" +
          "**BESKRIVNING:**\n" +
          "Liza utvecklade en administrationspanel för en kund till iQuest. I projektet ingick implementation av " +
          "frontend, backend och autentiseringslösning. React/Bootstrap för frontend, Firebase för backend, " +
          "Firestore/Realtime Database för datapersistens, och Google SSO för autentisering.\n" +
          "\n" +
          "**TEKNOLOGIER:** React, Bootstrap, SASS, Firebase Realtime Database, Firebase Firestore, Google Single " +
          "Sign-On, GitHub, WebStorm\n" +
          "\n" +
          "**NYCKELORD:** Admin-panel, Firebase, administrationsverktyg\n" +
          "\n" +
          "----\n" +
          "\n" +
          "**UPPDRAGSGIVARE:** iQuest s.r.o.\n" +
          "\n" +
          "**UPPDRAG (PERIOD):** Frontend-utvecklare (2020-12–2021-03)\n" +
          "\n" +
          "**BESKRIVNING:**\n" +
          "Liza implementerade om och moderniserade iQuests webbsida, https://www.iquest.cz/en. I arbetet ingick att " +
          "höja alla poäng i Google PageSpeed Insights; prestanda, tillgänglighet, nya standarder, best practices " +
          "samt sökmotoroptimering. Liza ersatte CSS med SCSS, införde återanvändbara komponenter, rensade ut " +
          "spagettikod, ersatte jQuery med modern JavaScript, och gjorde alla sidor responsiva för olika " +
          "enheter/skärmstorlekar.\n" +
          "\n" +
          "**TEKNOLOGIER:** Lighthouse, PageSpeed Insights, CSS3, SCSS, Git, Ruby, HTML5, JavaScript, jQuery, " +
          "Bootstrap, WebStorm\n" +
          "\n" +
          "**NYCKELORD:** Accessibility, prestandaförbättring, SEO, CSS-animeringar, responsiv design, Reusable " +
          "Components, Maintainability, refaktorering, företagswebbsida\n",
        internalProjectNotes: null,
      },
    ],
  },
  education: {
    title: "Utbildning",
    degrees: [
      {
        jobTitle: "BSc in Software Development",
        companyTitle: "Unicorn University – Prag, Tjeckien",
        date: "2020–2024",
        highlights:
          "- Slutförde kandidatexamen i mjukvaruutveckling.\n" +
          "- Lärde mig molnteknologier och moderna programmeringsspråk/-ramverk, inklusive JavaScript, Python, React " +
          "och NodeJS.\n" +
          "- Fick praktisk erfarenhet genom hackathons och praktik inom IT-branschen.\n" +
          "- Förberedde mig för avancerade utvecklarroller genom praktiska projekt.\n" +
          "- Examensarbete fokuserade på att optimera MongoDB-frågor och förbättra applikationsprestanda genom " +
          "avancerad sortering, sökning och filtrering. Examensarbete tillgängligt " +
          "[**här**](https://theses.unicornuniversity.net/olsevskaja-jelizaveta).\n",
        description: null,
        assignmentsText: null,
        internalProjectNotes: null,
      },
      {
        jobTitle: "Tillämpad informatik",
        companyTitle: "Prague University of Economics and Business – Prag, Tjeckien",
        date: "2014–2016",
        highlights:
          "- Studerade tillämpad informatik med fokus på affärsapplikationer.\n" +
          "- Fick grundläggande IT-kunskaper och en djup förståelse för mikro- och makroekonomi, affärsprocesser och " +
          "statistik.\n" +
          "- Genomförde intensiva studier under 1,5 års tid, vilket gav mig viktiga färdigheter inom databehandling, " +
          "Java-programmering och ekonomisk analys.\n" +
          "- Förberedde mig för olika roller inom teknik och företagande.\n" +
          "- Fick praktisk insikt i design av informationssystem och databaser.\n" +
          "- Bidrog till affärsutveckling genom effektiva dataunderstödda lösningar.\n",
        description: null,
        assignmentsText: null,
        internalProjectNotes: null,
      },
    ],
  },
  languagesSection: {
    title: "Språk",
    languages: [
      {
        name: "Svenska",
        level: "Mellannivå (B2)",
      },
      {
        name: "Engelska",
        level: "Avancerad (C1)",
      },
      {
        name: "Ryska",
        level: "Avancerad (C1)",
      },
      {
        name: "Tjeckiska",
        level: "Flytande (C2)",
      },
    ],
  },
};

export default sv;
