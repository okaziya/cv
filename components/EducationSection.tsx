import React from "react";
import { montserratExtraBold } from "../styles/fonts";
import { getTranslations } from "../lib/getTranslations";

import { Locale } from "../types";

import ExperienceItem from "./ExperienceItem/ExperienceItem";

export default function EducationSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <section className="education-section d-flex">
      <div>
        <h2 className={`${montserratExtraBold.className} section-first-column`}>
          Education
        </h2>
      </div>
      <div>
        <ExperienceItem
          jobTitle={"Software development, BC"}
          companyTitle={"Unicorn University – Prague Czech Republic"}
          date={"2020–2024"}
          responsibilities={[
            "Contributed significantly to the development of an internal CRM system as a full-stack developer.",
            "Involved in the entire development lifecycle, from technical analysis and estimation to backend and frontend integration.",
            "Participated in the design and implementation of new features.",
            "Followed structured development phases including unit testing and final testing.",
            "Worked within a CI/CD pipeline to ensure quality and efficiency.",
            "Contributed to the development of a client portal, similar to internet banking.",
            "Focused on improving the portal's capabilities through the migration from GraphQL to tRPC.",
          ]}
        />
      </div>
    </section>
  );
}
