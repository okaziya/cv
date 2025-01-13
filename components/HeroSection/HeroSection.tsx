import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import { getTranslations } from "../../lib/getTranslations";
import { Locale } from "../../types";

import { HeroSectionWrapper } from "./HeroSection.styles";

export default function HeroSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <HeroSectionWrapper className="d-flex align-items-center">
      <div>
        <h1 className={`${montserratExtraBold.className} m-0`}>
          {translations.field}
        </h1>
        <h3>{translations.description}</h3>
      </div>
      <div>
        <img
          src="/profile-photo.png"
          alt="Liza Blomdahl photo"
          className="profile-photo"
          width={560}
          height={560}
        />
      </div>
    </HeroSectionWrapper>
  );
}
