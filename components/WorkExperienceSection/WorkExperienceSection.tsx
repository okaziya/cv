import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import { getTranslations } from "../../lib/getTranslations";

import { Locale } from "../../types";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { WorkExperienceSectionWrapper } from "./WorkExperienceSection.styles";

export default function WorkExperienceSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <WorkExperienceSectionWrapper className="d-flex">
      <div>
        <h2 className={`${montserratExtraBold.className} section-first-column`}>
          Work experience
        </h2>
      </div>
      <div>
        <ExperienceItem
          jobTitle={translations.field}
          companyTitle={"Purple Technology – Brno, Czech Republic, Remote"}
          date={"2022-04–2024-09"}
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
        <ExperienceItem
          jobTitle={"Front-end Developer"}
          companyTitle={"Accentune – Remote"}
          date={"2021-10–2022-02"}
          responsibilities={[
            "Primarily focused on developing reusable components for integration into Storybook.",
            "Designed and implemented components to enhance UI consistency.",
          ]}
        />
        <ExperienceItem
          jobTitle={"Front-end Developer"}
          companyTitle={"Accentune – Remote"}
          date={"2019-06–2021-10"}
          responsibilities={[
            "Specialized in front-end development, with experience in back-end development.",
            "Developed responsive styling for web and mobile projects.",
            "Worked on diverse projects using various programming languages and libraries",
          ]}
        />
      </div>
    </WorkExperienceSectionWrapper>
  );
}
