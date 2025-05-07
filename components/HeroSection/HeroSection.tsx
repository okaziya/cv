"use client";

import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import Image from "next/image";
import { getImagePath } from "../../utils/imagePath";
import { HeroSectionWrapper } from "./HeroSection.styles";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";

export default function HeroSection() {
  const { locale } = useLocale();
  const translations = getTranslation(locale);

  return (
    <HeroSectionWrapper>
      <div className={"main-info"}>
        <h1 className={`${montserratExtraBold.className} m-0`}>{translations.heroSection.title}</h1>
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
