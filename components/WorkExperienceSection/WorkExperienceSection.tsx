import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import { getTranslations } from "../../lib/getTranslations";
import { Locale } from "../../types";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { WorkExperienceSectionWrapper } from "./WorkExperienceSection.styles";

export default function WorkExperienceSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <WorkExperienceSectionWrapper>
      <div className="section-first-column">
        <h2 className={montserratExtraBold.className}>{translations.workExperience.title}</h2>
      </div>
      <div>
        {translations.workExperience.experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            jobTitle={experience.jobTitle}
            companyTitle={experience.companyTitle}
            date={experience.date}
            highlights={experience.highlights}
          />
        ))}
      </div>
    </WorkExperienceSectionWrapper>
  );
}
