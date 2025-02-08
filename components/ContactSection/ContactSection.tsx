import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import { getTranslations } from "../../lib/getTranslations";

import { Locale } from "../../types";
import ContactInformation from "../ContactInformation";
import { ContactSectionWrapper } from "./ContactSection.styles";

export default function ContactSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <ContactSectionWrapper>
      <div className="section-first-column">
        <h2 className={montserratExtraBold.className}>{translations.contact.title}</h2>
      </div>
      <div>
        <ContactInformation locale={locale} />
      </div>
    </ContactSectionWrapper>
  );
}
