import React from "react";
import { Page, Link, Text, View, Document, StyleSheet, Font, Image } from "@react-pdf/renderer";

Font.register({
  family: "Nunito Sans",
  fonts: [
    {
      src: "fonts/NunitoSans-Light.ttf",
      fontWeight: "light",
    },
    {
      src: "fonts/NunitoSans-Regular.ttf",
      fontWeight: "medium",
    },
    {
      src: "fonts/NunitoSans-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

Font.register({
  family: "Montserrat",
  fonts: [
    {
      src: "fonts/Montserrat-ExtraBold.ttf",
      fontWeight: "ultrabold",
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: {
    color: "#333",
    fontFamily: "Nunito Sans",
    fontSize: 12,
    flexDirection: "column",
  },
  header: {
    paddingHorizontal: 18,
    paddingTop: 20,
    flexDirection: "row",
    flex: 1,
  },
  main: {
    flexDirection: "row",
    flex: 7,
  },
  profileColumn: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleColumn: {
    width: "60%",
  },
  logo: {
    width: 54,
    height: "auto",
    paddingBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  personalNumber: {
    fontSize: 12,
    fontWeight: "bold",
  },
  workingTitle: {
    paddingBottom: 5,
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  summary: {
    textAlign: "left",
    fontSize: 12,
    lineHeight: 1.5,
  },

  infoColumn: {
    width: "40%",
    paddingLeft: 18,
    paddingRight: 9,
    paddingTop: 4,
    backgroundColor: "#d7d7ff",
    height: "100%",
  },
  experienceColumn: {
    width: "60%",
    paddingLeft: 9,
    paddingRight: 18,
    paddingTop: 4,
  },
  section: {
    marginBottom: 9,
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 14,
    marginBottom: 4,
  },
  projectTitle: {
    fontFamily: "Montserrat",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  year: {
    fontWeight: "light",
    paddingLeft: 5,
  },
  organizationName: {
    fontWeight: "medium",
    marginBottom: 5,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  contactIcon: {
    width: 12,
    marginRight: 5,
  },
  contactText: {
    fontWeight: "bold",
  },
  skills: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 2,
    flexWrap: "wrap",
  },
  languageRow: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  assignment: {
    fontWeight: "normal",
  },

  separator: {
    marginVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#d7d7ff"',
  },
  assignmentDescription: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 4,
  },
  label: {
    fontFamily: "Montserrat",
    fontSize: 10,
    marginBottom: 4,
  },
  text: { fontWeight: "normal", fontFamily: "Nunito Sans", fontSize: 12 },
  projectPage: {
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
  technologies: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2c2ca7",
    marginBottom: 4,
  },
  paddingTop: {
    marginTop: 20,
  },
  pageNumber: {
    position: "absolute",
    bottom: 20,
    right: 18,
    fontSize: 10,
    color: "grey",
  },
  listItem: {
    flexDirection: "row",
    lineHeight: 0.87,
    marginBottom: 3,
  },
  bullet: {
    width: 10,
    fontSize: 12,
  },
  itemContent: {
    flex: 1,
    fontSize: 12,
  },
});

const CvDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileColumn}>
          <View>
            <Image style={styles.logo} src="glasses-black.png" />
            <Text style={styles.name}>Liza Blomdahl</Text>
            <Text>EU-medborgare (Tjeckien), svenskt personnummer: 940711-4223</Text>
            <Text style={styles.personalNumber}></Text>
          </View>
          <Text style={styles.organizationName}>
            <Link src="https://okaziya.github.io/cv/">https://okaziya.github.io/cv/</Link>
          </Text>
        </View>

        {/* Main Content */}
        <View style={styles.titleColumn}>
          <Text style={styles.workingTitle}>Fullstackutvecklare</Text>
          <Text style={styles.summary}>
            En engagerad Fullstack-utvecklare med fokus på frontend och över fem års erfarenhet. Skicklig i JavaScript,
            React, TypeScript och MongoDB. Jag har bidragit till fler än 30 projekt.
          </Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.infoColumn}>
          {/* Contact Information */}
          <View style={styles.section}>
            <Text style={styles.title}>Kontakt</Text>
            <View style={styles.contactRow}>
              <Image style={styles.contactIcon} src="city.png" />
              <Text style={styles.contactText}>
                &nbsp;<Link src="https://maps.app.goo.gl/svMdqrQLshZExFHJ8">Hjorthagen, Stockholm</Link>
              </Text>
            </View>
            <View style={styles.contactRow}>
              <Image style={styles.contactIcon} src="phone-gray.png" />
              <Text style={styles.contactText}>
                &nbsp;<Link src="tel:+46730500244">0730-500 244</Link>
              </Text>
            </View>
            <View style={styles.contactRow}>
              <Image style={styles.contactIcon} src="email-gray.png" />
              <Text style={styles.contactText}>
                &nbsp;<Link src="mailto:liza@owntube.tv">liza@owntube.tv</Link>
              </Text>
            </View>

            <View style={styles.contactRow}>
              <Image style={styles.contactIcon} src="in-gray.png" />
              <Text style={styles.contactText}>
                &nbsp;<Link src="https://www.linkedin.com/in/liza-blomdahl/">linkedin.com/in/liza-blomdahl/</Link>
              </Text>
            </View>
            <View style={styles.contactRow}>
              <Image style={styles.contactIcon} src="github-gray.png" />
              <Text style={styles.contactText}>
                &nbsp;<Link src="https://github.com/okaziya">@okaziya</Link>
              </Text>
            </View>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.title}>Teknologier/färdigheter</Text>
            <Text style={styles.skills}>
              TypeScript, JavaScript, Python, HTML5, CSS3, SQL, React, Agile, Scrum, Bootstrap, SASS, Material UI,
              GraphQL, Next.js, tRPC, useQuery, REST API, CI/CD (GitHub Actions, CircleCI), MongoDB, DynamoDB, SQLite,
              Firebase (Firestore), Jest, Vitest, Storybook, Tailwind CSS, AWS, Git & GitHub, React Native
            </Text>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.title}>Utbildning</Text>

            <View style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Svenska A1 till B2</Text>
                <Text style={styles.year}>(2024-2025)</Text>
              </View>

              <Text style={styles.organizationName}>Folkuniversitetet – Stockholm, Sverige</Text>
            </View>

            <View style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Software Development</Text>
                <Text style={styles.year}>(2020–2024)</Text>
              </View>
              <Text style={styles.organizationName}>Unicorn University – Prag, Tjeckien</Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>Slutförde kandidatexamen i mjukvaruutveckling.</Text>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Tillämpad informatik</Text>
                <Text style={styles.year}>(2014–2016)</Text>
              </View>
              <Text style={styles.organizationName}>Prague University of Economics and Business – Prag, Tjeckien </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>Studerade tillämpad informatik med fokus på affärsapplikationer.</Text>
              </View>
            </View>
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.title}>Språk</Text>
            <Text style={styles.languageRow}>Svenska – Mellannivå (på väg mot B2)</Text>
            <Text style={styles.languageRow}>Engelska – Övre medelnivå (B2)</Text>
            <Text style={styles.languageRow}>Tjeckiska – Flytande (C2)</Text>
            <Text style={styles.languageRow}>Ryska – Flytande (C2)</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.experienceColumn}>
          {/* Work Experience */}
          <View style={styles.section}>
            <Text style={styles.title}>Anställningar</Text>

            <View style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Medgrundare & IT-konsult</Text>
                <Text style={styles.year}>(2024-10–pågående)</Text>
              </View>
              <Text style={styles.organizationName}>OwnTube Nordic AB – Stockholm, Sverige </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Medgrundade konsultbolaget OwnTube Nordic AB tillsammans med min partner.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Integration i Sverige: folkbokföring avklarad, kontakt med myndigheter och banker, slutfört alla steg
                  i SFI och lärt mig om arbetsmarknad/företagskultur i mitt nya hemland.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Byggt ett antal projekt med olika AI-verktyg: Lovable.dev- appar, egna CustomGPTs i ChatGPT och OpenAI
                  Assistants.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Fullstackutvecklare</Text>
                <Text style={styles.year}>(2022-04–2024-09)</Text>
              </View>
              <Text style={styles.organizationName}>Purple Technology – Brno, Tjeckien & Remote </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Bidrog avsevärt till utvecklingen av ett internt CRM-system som fullstackutvecklare.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Deltog i hela utvecklingscykeln – från teknisk analys och estimering till design, implementation samt
                  backend- och frontend-integration – enligt en strukturerad process med enhetstestning och
                  acceptanstestning.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Arbetade med CI/CD-pipelines för att säkerställa god kvalitet och effektiv leverans.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Bidrog till utvecklingen av en klientportal för forex, liknande en internetbank, och förbättrade
                  portalens funktion genom migrering från GraphQL till tRPC.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Frontendutvecklare</Text>
                <Text style={styles.year}>(2021-10–2022-02)</Text>
              </View>
              <Text style={styles.organizationName}>Accenture – Distans </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Fokuserade främst på att utveckla återanvändbara komponenter för integration i Storybook.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Designade och implementerade komponenter för att förbättra UI-konsistens.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Frontendutvecklare</Text>
              <View style={styles.row}>
                <Text style={styles.organizationName}>iQuest s.r.o. – Prag, Tjeckien</Text>
                <Text style={styles.year}>(2019-06–2021-10)</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Specialiserad på frontendutveckling med erfarenhet av backendutveckling.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}> Utvecklade responsiv styling för webb- och mobilprojekt.</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemContent}>
                  Arbetade med olika projekt och olika programmeringsspråk och bibliotek.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.projectPage}>
        <Text style={styles.projectTitle}>Uppdragshistorik</Text>
        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>Purple Technology</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Frontendutvecklare (2023-12–2024-09)</Text>
          </Text>
          <Text style={styles.assignmentDescription}>
            Liza gick in som frontendutvecklare för att bygga användarportalen till Axiory, en fintech-satsning med
            fokus på valutahandel/forex. Hon arbetade i nära samarbete med teamen inom backend, iOS/Android och QA med
            att färdigställa funktionalitet för att ta kunderna genom onboarding-processen (avtal, KYC m.m.), och se
            till att de kunde komma igång med sina trading-verktyg. En betydande del av uppdraget ägnades åt felsökning
            med backend-teamet, buggfixar och stabilisering av tjänsten. Mot slutet av uppdraget utvecklade hon även ett
            internt verktyg för att ställa databasfrågor kring kundbeteenden och compliance.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>
            React, TypeScript, Styled Components, Apollo GraphQL, tRPC, Postico, MongoDB, AWS Lambda, AWS AppConfig, Git
            Monorepo, Figma, Linear, GitHub, Slack, VS Code, GitHub Actions
          </Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>
            FinTech, forex/FX, trading-plattform, användarhantering, UX, compliance, bank och finans, autentisering &
            auktorisation, Reusable Components, AWS, CI/CD, Serverless, Agile, marknadsföringskampanjer
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>Purple Technology</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Fullstackutvecklare (2022-04–2023-12)</Text>
          </Text>
          <Text style={styles.assignmentDescription}>
            Liza kom in i rollen som fullstack-utvecklare för att bygga ett nytt CRM för att hålla reda på användare,
            transaktioner och kundkonton till ett fintech-projekt. Bland huvuduppgifterna ingick att integrera olika
            backend-system för att skapa realtidssökningar mot MongoDB Atlas, optimera databasfrågor för god prestanda
            och arbeta med datakvalitet. Ett av Lizas varmaste minnen från den här tiden är ett initiativ för att
            tillhandahålla compliance-teamet med ett rapporteringsverktyg för beslutsstöd kring insättningar.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>
            React, TypeScript, Next.js, AWS S3, AWS Cognito, AWS Lambda, MongoDB Atlas, Postgres, SQL, Apollo GraphQL,
            tRPC, AtlasSearch, Jest, Git Monorepo, Figma, Jira, Linear, GitHub, Slack, VS Code, CircleCI
          </Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>
            CRM, FinTech, query-optimering, UX, compliance, prestandatestning, lösningsarkitektur, datamodellering,
            datakvalitet, databas-design, CI/CD, Serverless, Agile
          </Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>Unicorn University</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Fullstack-utvecklare (2022-01–2022-03)</Text>
          </Text>
          <Text style={styles.assignmentDescription}>
            Liza byggde ett förslag till studentportal för Unicorn University, från projektbeskrivning och -planering,
            design av UML-diagram för alla flöden, och JIRA-backlog. Lösningen implementerades med studentinloggning,
            översikt av pågående kurser, kurslitteratur, personuppgifter, betyg, och kontaktuppgifter till lärare.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>
            React, TypeScript, Material UI, CSS3, NodeJS, MongoDB Atlas, OAuth, UML, Insomnia, GitHub, VS Code
          </Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>
            Systemdesign, systemdokumentation, systemimplementation, studentprojekt, elevportal
          </Text>
        </View>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.projectPage}>
        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>Accenture</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Frontendutvecklare (2021-10–2022-02)</Text>
          </Text>

          <Text style={styles.assignmentDescription}>
            Liza lånades in som frontend-utvecklare till ett projekt för Škoda via Titans Consulting och Accenture.
            Tillsammans med ett remote-team med ett halvdussin utvecklare i Italien så arbetade hon med att designa och
            utveckla återanvändbara komponenter för Škodas Storybook. UI-komponenterna implementerade kundens
            designsystem med stöd för alla förekommande layouter och upplösningar.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>
            Storybook, Adobe Experience Manager (AEM), Figma, React, TypeScript, SASS, GitHub, Slack, VS Code, Trello
          </Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>
            Återanvändbara UI-komponenter, responsiv design, skalbarhet, designsystem, accessibility
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>iQuest s.r.o.</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Fullstack-utvecklare (2021-04–2021-10)</Text>
          </Text>

          <Text style={styles.assignmentDescription}>
            Liza utvecklade en administrationspanel för en kund till iQuest. I projektet ingick implementation av
            frontend, backend och autentiseringslösning. React/Bootstrap för frontend, Firebase för backend,
            Firestore/Realtime Database för datapersistens, och Google SSO för autentisering.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>
            React, Bootstrap, SASS, Firebase Realtime Database, Firebase Firestore, Google Single Sign-On, GitHub,
            WebStorm, Slack
          </Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>Admin-panel, Firebase, administrationsverktyg</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>Unicorn University</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>IoT-utvecklare (2021-02–2021-05)</Text>
          </Text>

          <Text style={styles.assignmentDescription}>
            Liza utvecklade en IoT-lösning för blomsterbutiker tillsammans med ett team på 4 andra studenter. Systemet
            mätte luftfuktighet från sensorer i butiken och samlade in mätvärden i MongoDB. Teamet byggde en interaktiv
            dashboard för att visualisera data i realtid. Sensorutrustningen baserades på Arduino Uno (mikrokontroller)
            och Raspberry Pi för datainsamling.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>
            React, TypeScript, Chart.js, CSS3, Raspberry Pi, Arduino Uno, MongoDB, GitHub, Trello, VS Code
          </Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>
            Systemdesign, visualisering, datainsamling, studentprojekt, Internet of Things (IoT)
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>iQuest s.r.o.</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Frontend-utvecklare (2020-12–2021-03)</Text>
          </Text>

          <Text style={styles.assignmentDescription}>
            Liza byggde om och moderniserade iQuests webbsida, https://www.iquest.cz/en. I arbetet ingick att höja alla
            poäng i Google PageSpeed Insights; prestanda, tillgänglighet, nya standarder, best practices samt
            sökmotoroptimering. Liza ersatte CSS med SCSS, införde återanvändbara komponenter, rensade ut spagettikod,
            ersatte jQuery med modern JavaScript, och gjorde alla sidor responsiva för olika enheter/skärmstorlekar.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>
            Lighthouse, PageSpeed Insights, CSS3, SCSS, Git, Ruby, HTML5, JavaScript, jQuery, Bootstrap, WebStorm, Slack
          </Text>
          <Text style={[styles.label, styles.paddingTop]}>NYCKELORD:</Text>
          <Text style={styles.text}>
            Accessibility, prestandaförbättring, SEO, CSS-animeringar, responsiv design, Reusable Components,
            Maintainability, refaktorering, företagswebbsida
          </Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>iQuest s.r.o.</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Frontend-utvecklare (2020-09–2020-12)</Text>
          </Text>

          <Text style={styles.assignmentDescription}>
            Liza implementerade frontend från scratch för en ny webbplats åt en återförsäljare inom medicinsk
            utrustning. Uppdraget utfördes i samarbete med en backend-utvecklare (Ruby) och en designer (Adobe XD).
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>Bootstrap, HTML5, CSS3, Ruby on Rails, WebStorm, Slack, Adobe XD</Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>B2B, företagswebbsida, responsiv design</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>iQuest s.r.o.</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Frontend-utvecklare (2020-06–2020-09)</Text>
          </Text>

          <Text style={styles.assignmentDescription}>
            Liza byggde en webbplats åt ett tyskt livsmedelsföretag för att marknadsföra deras yoghurt-produktserie med
            recept och liknande. Sajten implementerades med Jekyll och Ruby.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>Ruby, Jekyll, HTML, CSS3, Slack, JetBrains RubyMine</Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>B2C, SEO, responsiv design, marknadsföring, produktpresentationer</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>iQuest s.r.o.</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Frontend-utvecklare (2020-02–2020-06)</Text>
          </Text>

          <Text style={styles.assignmentDescription}>
            Liza ingick i ett frontend-team, tillsammans implementerade de en anpassad design för en videospelare
            (styling av kontrollknappar, tidssökare m.m.) och lade in hållpunkter med interaktiv frågesport/quiz. Syftet
            med projektet var att bidra till komponenter i en lärplattform för första hjälpen-utbildning.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>
            HTML5 Video API, React, JavaScript, SCSS/CSS3, Slack, WebStorm, Firebase Firestore
          </Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>
            Ljud & video, Video on demand (VOD), accessibility, e-learning, responsiv design
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>iQuest s.r.o.</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Frontend-utvecklare (2019-09–2020-02)</Text>
          </Text>

          <Text style={styles.assignmentDescription}>
            Liza utvecklade en kundklubbs-app åt en matvarukedja med React Native, för Android och iOS. Appen
            presenterade kampanjer & erbjudanden för medlemmar och visade ackumulerade bonusar. Arbetet utfördes i nära
            samarbete med ett backend-team.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>React Native, iOS, Android, Android Studio, Xcode, Slack, VS Code</Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>App-utveckling, mobilapp, lojalitetsapp, marknadsföring, B2C, livsmedelskedja</Text>
        </View>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.projectPage}>
        <View style={styles.assignment}>
          <Text style={styles.label}>
            UPPDRAGSGIVARE: <Text style={styles.text}>iQuest s.r.o.</Text>
          </Text>
          <Text style={styles.label}>
            UPPDRAG (PERIOD): <Text style={styles.text}>Frontend-utvecklare (2019-06–2019-09)</Text>
          </Text>

          <Text style={styles.assignmentDescription}>
            Liza utvecklade en frontend i en desktop-applikation för Doosan Robotics. Applikationen var ett internt
            verktyg för att tillhandahålla en katalogtjänst med manualer till olika maskiner som produceras av
            företaget.
          </Text>
          <Text style={styles.label}>TEKNOLOGIER:</Text>
          <Text style={styles.technologies}>CSS3, HTML5, Ruby on Rails, Slack, VS Code</Text>
          <Text style={styles.label}>NYCKELORD:</Text>
          <Text style={styles.text}>
            Desktop-applikation, offline-app, katalogtjänst, dokumentregister, tillverkningsindustria
          </Text>
        </View>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
    </Page>
  </Document>
);

export default CvDocument;
