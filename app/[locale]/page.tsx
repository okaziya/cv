"use client";

import React from "react";
// import { PDFViewer } from "@react-pdf/renderer";
import HeroSection from "../../components/HeroSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import WorkExperienceSection from "../../components/WorkExperienceSection";
import SkillsSection from "../../components/SkillsSection";
import EducationSection from "../../components/EducationSection";
import LanguagesSection from "../../components/LanguagesSection/LanguagesSection";
import Image from "next/image";
import { getImagePath } from "../../utils/imagePath";
// import CvDocument from "../../components/CvDocument";

export default function LocaleHomePage() {
  return (
    <>
      {/* In case if its needet to see the changes directly when updating the CVDocument */}
      {/* <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <CvDocument />
      </PDFViewer> */}
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
