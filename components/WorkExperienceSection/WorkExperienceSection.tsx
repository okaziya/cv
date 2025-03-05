"use client";

import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { WorkExperienceSectionWrapper } from "./WorkExperienceSection.styles";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";

export default function WorkExperienceSection() {
  const { locale } = useLocale();
  const translations = getTranslation(locale);

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
            detailsText={experience.assignmentsText}
          />
        ))}
      </div>
    </WorkExperienceSectionWrapper>
  );
}
