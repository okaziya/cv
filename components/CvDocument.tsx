import React from "react";
import { Page, Text, View, Document, StyleSheet, Font, Image } from "@react-pdf/renderer";

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

const styles = StyleSheet.create({
  page: {
    color: "#333",
    fontFamily: "Nunito Sans",
    fontSize: 12,
  },
  header: {
    paddingHorizontal: 18,
    paddingTop: 20,
    flexDirection: "row",
  },
  logo: {
    width: 54,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  personalNumber: {
    fontSize: 12,
    fontWeight: "bold",
  },
  workingTitle: {
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  summary: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 1.5,
  },
  infoColumn: {
    width: "40%",
    paddingLeft: 18,
    paddingRight: 9,
    backgroundColor: "#d7d7ff",
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    lineHeight: 1.5,
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
  list: {
    marginLeft: 10,
    marginBottom: 5,
  },
});

// Frontend-utvecklare, IT-konsult

const CvDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ width: "40%" }}>
          <Image style={styles.logo} src="glasses-black.png" />
          <Text style={styles.name}>Liza Blomdahl-Olsevskaja</Text>
          <Text style={styles.personalNumber}>940101-1234</Text>
          <Text style={styles.text}>EU-medborgare (Tjeckien)</Text>
          <Text style={styles.workingTitle}>Fullstackutvecklare</Text>
          <Text style={styles.text}>okaziya.github.io/cv/</Text>
        </View>

        {/* Main Content */}
        <View style={{ width: "60%", paddingLeft: 15, textAlign: "right" }}>
          <Text style={styles.summary}>
            En engagerad Fullstack-utvecklare med fokus på frontend och över fem års erfarenhet. Skicklig i JavaScript,
            React, TypeScript och MongoDB. {"\n"} Jag har bidragit till fler än 30 projekt.
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.infoColumn}>
          {/* Contact Information */}
          <View style={styles.section}>
            <Text style={styles.title}>Kontakt</Text>
            <Text style={styles.text}>Stockholm</Text>
            <View style={styles.contactRow}>
              <Image style={styles.contactIcon} src="phone-gray.png" />
              <Text style={styles.contactText}> 0730-500 244</Text>
            </View>
            <View style={styles.contactRow}>
              <Image style={styles.contactIcon} src="email-gray.png" />
              <Text style={styles.contactText}> liza.blomdahl@gmail.com</Text>
            </View>

            <View style={styles.contactRow}>
              <Image style={styles.contactIcon} src="in-gray.png" />
              <Text style={styles.contactText}> linkedin.com/in/liza-blomdahl/</Text>
            </View>
            <View style={styles.contactRow}>
              <Image style={styles.contactIcon} src="github-gray.png" />
              <Text style={styles.contactText}> @okaziya</Text>
            </View>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.title}>Skills</Text>
            <Text style={styles.text}>
              React, Agil metodik (Scrum), Bootstrap, SASS, Material UI, GraphQL, Next.js, tRPC, useQuery, REST API,
              CI/CD (GitHub Actions, CircleCI), MongoDB, DynamoDB, SQLite, Firebase (Firestore), Jest, Vitest,
              Storybook, Tailwind CSS, AWS, Git & GitHub, React Native (grundläggande kunskaper)
            </Text>
            <Text style={styles.text}>
              Programmeringsspråk: TypeScript, JavaScript, Python, HTML5, CSS3, SQL, Ruby (grundläggande kunskaper)
            </Text>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.title}>Utbildning</Text>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Svenska A1 till B2</Text>
              <Text style={styles.text}>Folkuniversitetet – Stockholm, Sverige (2024-2025)</Text>
              <Text style={styles.list}>
                • Slutförde första 5 svenska-kurserna (6 månader av klassrumsstudier på halvfart).
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>BSc in Software Development</Text>
              <Text style={styles.text}>Unicorn University – Prag, Tjeckien (2020–2024)</Text>
              <Text style={styles.list}>• Slutförde kandidatexamen i mjukvaruutveckling.</Text>
              <Text style={styles.list}>
                • Lärde mig molnteknologier och moderna programmeringsspråk/-ramverk, inklusive JavaScript, Python,
                React och NodeJS.
              </Text>
              <Text style={styles.list}>
                • Fick praktisk erfarenhet genom hackathons och praktik inom IT-branschen.
              </Text>
              <Text style={styles.list}>• Förberedde mig för avancerade utvecklarroller genom praktiska projekt.</Text>
              <Text style={styles.list}>
                • Examensarbete fokuserade på att optimera MongoDB-frågor och förbättra applikationsprestanda genom
                avancerad sortering, sökning och filtrering. .
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Tillämpad informatik</Text>
              <Text style={styles.text}>Prague University of Economics and Business – Prag, Tjeckien (2014–2016)</Text>
              <Text style={styles.list}>• Studerade tillämpad informatik med fokus på affärsapplikationer.</Text>
              <Text style={styles.list}>
                • Fick grundläggande IT-kunskaper och en djup förståelse för mikro- och makroekonomi, affärsprocesser
                och statistik.
              </Text>
              <Text style={styles.list}>
                • Genomförde intensiva studier under 1,5 års tid, vilket gav mig viktiga färdigheter inom
                databehandling, Java-programmering och ekonomisk analys.
              </Text>
              <Text style={styles.list}>• Förberedde mig för olika roller inom teknik och företagande.</Text>
              <Text style={styles.list}>• Fick praktisk insikt i design av informationssystem och databaser.</Text>
              <Text style={styles.list}>• Bidrog till affärsutveckling genom effektiva dataunderstödda lösningar.</Text>
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View style={{ width: "60%" }}>
          {/* Work Experience */}
          <View style={styles.section}>
            <Text style={styles.title}>Erfarenhet</Text>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Medgrundare & IT-konsult</Text>
              <Text style={styles.text}>OwnTube Nordic AB – Stockholm, Sverige (2024-10–pågående )</Text>
              <Text style={styles.list}>
                • Medgrundade konsultbolaget OwnTube Nordic AB tillsammans med min partner.
              </Text>
              <Text style={styles.list}>
                • Integration i Sverige: folkbokföring avklarad, kontakt med myndigheter och banker, slutfört alla steg
                i SFI och lärt mig om arbetsmarknad/företagskultur i mitt nya hemland.
              </Text>
              <Text style={styles.list}>
                • Byggt ett antal projekt med olika AI-verktyg: Lovable.dev-appar, egna CustomGPTs i ChatGPT och OpenAI
                Assistants.
              </Text>
              <Text style={styles.list}>
                • Etablerat professionellt nätverk i Stockholm, träffat kunder och påbörjat yrkesmässiga samarbeten.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Fullstackutvecklare</Text>
              <Text style={styles.text}>Purple Technology – Brno, Tjeckien & Remote (2022-04–2024-09)</Text>
              <Text style={styles.list}>
                • Bidrog avsevärt till utvecklingen av ett internt CRM-system som fullstackutvecklare.
              </Text>
              <Text style={styles.list}>
                • Var involverad i hela utvecklingscykeln, från teknisk analys och estimering till backend- och
                frontend-integration.
              </Text>
              <Text style={styles.list}>• Deltog i design och implementering av nya funktioner.</Text>
              <Text style={styles.list}>
                • Följde en strukturerad utvecklingsprocess, inklusive enhetstestning och acceptanstestning.
              </Text>
              <Text style={styles.list}>
                • Arbetade med CI/CD-pipelines för att säkerställa god kvalitet och effektiv leverans.
              </Text>
              <Text style={styles.list}>
                • Bidrog till utvecklingen av en klientportal för forex, liknande en internetbank.
              </Text>
              <Text style={styles.list}>
                • Fokuserade på att förbättra portalens funktioner genom migrering från GraphQL till tRPC.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Frontendutvecklare</Text>
              <Text style={styles.text}>Accenture – Distans (2021-10–2022-02)</Text>
              <Text style={styles.list}>
                • Fokuserade främst på att utveckla återanvändbara komponenter för integration i Storybook.
              </Text>
              <Text style={styles.list}>
                • Designade och implementerade komponenter för att förbättra UI-konsistens.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Frontendutvecklare</Text>
              <Text style={styles.text}>iQuest s.r.o. – Prag, Tjeckien (2019-06–2021-10)</Text>
              <Text style={styles.list}>
                • Specialiserad på frontendutveckling med erfarenhet av backendutveckling.
              </Text>
              <Text style={styles.list}>• Utvecklade responsiv styling för webb- och mobilprojekt.</Text>
              <Text style={styles.list}>• Arbetade med olika projekt och olika programmeringsspråk och bibliotek.</Text>
            </View>
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.title}>Språk</Text>
            <Text style={styles.text}>Svenska – Mellannivå (på väg mot B2)</Text>
            <Text style={styles.text}>Engelska - Övre medelnivå (B2)</Text>
            <Text style={styles.text}>Tjeckiska – Flytande (C2)</Text>
            <Text style={styles.text}>Ryska – Flytande (C2)</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CvDocument;
