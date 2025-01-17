import React from "react";

import HeroSection from "../../components/HeroSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import WorkExperienceSection from "../../components/WorkExperienceSection";
import { Locale } from "../../types";
import SkillsSection from "../../components/SkillsSection";
import EducationSection from "../../components/EducationSection";
import LanguagesSection from "../../components/LanguagesSection/LanguagesSection";
import Image from "next/image";
import { getImagePath } from "../../utils/imagePath";

export default function LocaleHomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;

  return (
    <>
      <HeroSection locale={locale} />
      <ContactSection locale={locale} />
      <WorkExperienceSection locale={locale} />
      <SkillsSection locale={locale} />
      <EducationSection locale={locale} />
      <LanguagesSection locale={locale} />
      <section className="glasses-section d-flex justify-content-center">
        <Image
          src={getImagePath("/glasses-white.png")}
          alt="White Glasses"
          width={80}
          height={16}
          priority
          unoptimized
        />
      </section>
    </>
  );
}
