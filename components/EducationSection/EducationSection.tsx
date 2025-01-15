import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import { getTranslations } from "../../lib/getTranslations";
import { Locale } from "../../types";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { EducationSectionWrapper } from "./EducationSection.styles";

export default function EducationSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <EducationSectionWrapper>
      <div className="section-first-column">
        <h2 className={montserratExtraBold.className}>
          {translations.education.title}
        </h2>
      </div>
      <div>
        {translations.education.degrees.map((degree, index) => (
          <ExperienceItem
            key={index}
            jobTitle={degree.jobTitle}
            companyTitle={degree.companyTitle}
            date={degree.date}
            responsibilities={degree.responsibilities}
          />
        ))}
      </div>
    </EducationSectionWrapper>
  );
}
