import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#333",
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
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
    marginBottom: 5,
    lineHeight: 1.5,
  },
  list: {
    marginLeft: 10,
    marginBottom: 5,
  },
});

const MyPDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <Text style={styles.header}>Liza Blomdahl-Olsevskaja</Text>
      <Text style={styles.text}>Full-Stack Developer</Text>
      <Text style={styles.text}>okaziya.github.io/cv/</Text>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.title}>Contact</Text>
        <Text style={styles.text}>Phone: 0730-500 244</Text>
        <Text style={styles.text}>Email: liza.blomdahl@gmail.com</Text>
        <Text style={styles.text}>
          LinkedIn: linkedin.com/in/liza-blomdahl/
        </Text>
        <Text style={styles.text}>GitHub: @okaziya</Text>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.title}>Work Experience</Text>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Full Stack Developer</Text>
          <Text style={styles.text}>
            Purple Technology – Brno, Czech Republic (2022-04 – 2024-09)
          </Text>
          <Text style={styles.list}>
            • Contributed significantly to an internal CRM system.
          </Text>
          <Text style={styles.list}>
            • Participated in the design and implementation of new features.
          </Text>
          <Text style={styles.list}>
            • Migrated from GraphQL to tRPC to improve portal capabilities.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Front-end Developer</Text>
          <Text style={styles.text}>
            Accentune – Remote (2021-10 – 2022-02)
          </Text>
          <Text style={styles.list}>
            • Developed reusable components for Storybook.
          </Text>
          <Text style={styles.list}>
            • Enhanced UI consistency through design implementation.
          </Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.title}>Skills</Text>
        <Text style={styles.text}>
          Agile Web Development, tRPC, useQuery, REST API, CI/CD Pipeline
        </Text>
        <Text style={styles.text}>
          Languages: TypeScript, JavaScript, Python, React
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.title}>Education</Text>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Software Development, BC</Text>
          <Text style={styles.text}>
            Unicorn University – Prague, Czech Republic (2020–2024)
          </Text>
          <Text style={styles.list}>• Thesis: Optimizing MongoDB queries.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Applied Informatics</Text>
          <Text style={styles.text}>
            Prague University of Economics and Business (2014–2016)
          </Text>
          <Text style={styles.list}>
            • Gained foundational IT and economic skills.
          </Text>
        </View>
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <Text style={styles.title}>Languages</Text>
        <Text style={styles.text}>English: Fully fluent</Text>
        <Text style={styles.text}>Swedish: Beginner (A1)</Text>
      </View>
    </Page>
  </Document>
);

export default MyPDFDocument;
