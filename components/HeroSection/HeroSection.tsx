import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import { getTranslations } from "../../lib/getTranslations";
import { Locale } from "../../types";
import Image from "next/image";
import { getImagePath } from "../../utils/imagePath";
import { HeroSectionWrapper } from "./HeroSection.styles";

export default function HeroSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <HeroSectionWrapper>
      <div>
        <h1 className={`${montserratExtraBold.className} m-0`}>
          {translations.heroSection.title}
        </h1>
        <h3>{translations.heroSection.description}</h3>
      </div>
      <div className="profile-photo-wrapper">
        <Image
          src={getImagePath("/profile-photo.png")}
          alt={translations.heroSection.photoAlt}
          className="profile-photo"
          width={560}
          height={560}
          priority
          unoptimized
        />
      </div>
    </HeroSectionWrapper>
  );
}
