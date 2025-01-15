import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import { getTranslations } from "../../lib/getTranslations";
import { Locale } from "../../types";
import { LanguageSectionWrapper } from "./LanguagesSection.styles";

export default function LanguagesSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <LanguageSectionWrapper>
      <div className="section-first-column">
        <h2 className={montserratExtraBold.className}>
          {translations.languagesSection.title}
        </h2>
      </div>
      <div>
        {translations.languagesSection.languages.map(
          (language: { name: string; level: string }, index: number) => (
            <h5 key={index} className="mb-3 mt-0 pb-1">
              {`${language.name} – ${language.level}`}
            </h5>
          )
        )}
      </div>
    </LanguageSectionWrapper>
  );
}
