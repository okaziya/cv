import React from "react";

import HeroSection from "../../components/HeroSection";
import ContactSection from "../../components/ContactSection";
import WorkExperienceSection from "../../components/WorkExperienceSection";
import { Locale } from "../../types";
import SkillsSection from "../../components/SkillsSection";
import EducationSection from "../../components/EducationSection";
import LanguagesSection from "../../components/LanguagesSection";

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
        <img
          src="/glasses-white.png"
          alt="White Glasses"
          width={80}
          height={16}
        />
      </section>
    </>
  );
}
