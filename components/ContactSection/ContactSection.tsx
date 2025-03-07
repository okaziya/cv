"use client";

import React from "react";
import { montserratExtraBold } from "../../styles/fonts";

import ContactInformation from "../ContactInformation";
import { ContactSectionWrapper } from "./ContactSection.styles";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";

export default function ContactSection() {
  const { locale } = useLocale();
  const translations = getTranslation(locale);

  return (
    <ContactSectionWrapper>
      <div className="section-first-column">
        <h2 className={montserratExtraBold.className}>{translations.contact.title}</h2>
      </div>
      <div>
        <ContactInformation />
      </div>
    </ContactSectionWrapper>
  );
}
