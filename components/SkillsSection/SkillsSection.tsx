"use client";

import React from "react";
import SkillCategory from "./SkillCategory";
import { SkillSectionWrapper } from "./SkillSection.styles";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";

export default function SkillsSection() {
  const { locale } = useLocale();

  const translations = getTranslation(locale);

  return (
    <SkillSectionWrapper className="row flex-wrap">
      {translations.skillsSection.categories.map(({ key, title, items }, index) => (
        <React.Fragment key={key}>
          <SkillCategory title={title} skillList={Array.from(items)} />
          {index === 1 && <div className="w-100" />}
        </React.Fragment>
      ))}
    </SkillSectionWrapper>
  );
}
