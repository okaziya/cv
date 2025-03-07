"use client";

import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { EducationSectionWrapper } from "./EducationSection.styles";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";

export default function EducationSection() {
  const { locale } = useLocale();
  const translations = getTranslation(locale);

  return (
    <EducationSectionWrapper>
      <div className="section-first-column">
        <h2 className={montserratExtraBold.className}>{translations.education.title}</h2>
      </div>
      <div>
        {translations.education.degrees.map((degree, index) => (
          <ExperienceItem
            key={index}
            jobTitle={degree.jobTitle}
            companyTitle={degree.companyTitle}
            date={degree.date}
            highlights={degree.highlights}
            detailsText={null}
          />
        ))}
      </div>
    </EducationSectionWrapper>
  );
}
