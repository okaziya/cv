import React from "react";

import HeroSection from "../../components/HeroSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import WorkExperienceSection from "../../components/WorkExperienceSection";
import SkillsSection from "../../components/SkillsSection";
import EducationSection from "../../components/EducationSection";
import LanguagesSection from "../../components/LanguagesSection/LanguagesSection";
import Image from "next/image";
import { getImagePath } from "../../utils/imagePath";

export default function LocaleHomePage() {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <WorkExperienceSection />
      <SkillsSection />
      <EducationSection />
      <LanguagesSection />
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
