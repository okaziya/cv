"use client";

import React from "react";
import SkillCategory from "./SkillCategory";
import { SKILL_CATEGORIES } from "../../config";
import { SkillCategoryKey } from "../../types";
import { SkillSectionWrapper } from "./SkillSection.styles";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";

export default function SkillsSection() {
  const { locale } = useLocale();

  const translations = getTranslation(locale);

  return (
    <SkillSectionWrapper className="row flex-wrap">
      {SKILL_CATEGORIES.map(({ titleKey, skills }, index) => {
        // Ensure TypeScript enforces that titleKey exists in translations
        const translatedTitle = translations.skillsSection.categories[titleKey as SkillCategoryKey];

        return (
          <>
            <SkillCategory
              key={index}
              title={translatedTitle} // Type-safe translation lookup
              skillList={skills}
            />
            {index === 1 && <div className="w-100"></div>}
            {/* Row break after the second item */}
          </>
        );
      })}
    </SkillSectionWrapper>
  );
}
