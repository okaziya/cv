"use client";

import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import { LanguageSectionWrapper } from "./LanguagesSection.styles";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";

export default function LanguagesSection() {
  const { locale } = useLocale();

  const translations = getTranslation(locale);

  return (
    <LanguageSectionWrapper>
      <div className="section-first-column">
        <h2 className={montserratExtraBold.className}>{translations.languagesSection.title}</h2>
      </div>
      <div>
        {translations.languagesSection.languages.map((language: { name: string; level: string }, index: number) => (
          <h5 key={index} className="mb-3 mt-0 pb-1">
            {`${language.name} – ${language.level}`}
          </h5>
        ))}
      </div>
    </LanguageSectionWrapper>
  );
}
