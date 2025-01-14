import React from "react";
import { getTranslations } from "../../lib/getTranslations";
import { Locale } from "../../types";
import SkillCategory from "./SkillCategory";
import { SKILL_CATEGORIES } from "../../config";
import { SkillCategoryKey } from "../../types";

export default function SkillsSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <section className="skills-section row flex-wrap">
      {SKILL_CATEGORIES.map(({ titleKey, skills }, index) => {
        // Ensure TypeScript enforces that titleKey exists in translations
        const translatedTitle =
          translations.skillsSection.categories[titleKey as SkillCategoryKey];

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
    </section>
  );
}
