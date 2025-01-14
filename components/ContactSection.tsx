import React from "react";
import { montserratExtraBold } from "../styles/fonts";
import { getTranslations } from "../lib/getTranslations";

import { Locale } from "../types";
import ContactInformation from "./ContactInformation";

export default function ContactSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <section className="d-flex">
      <div>
        <h2 className={`${montserratExtraBold.className} section-first-column`}>
          {translations.contact.title}
        </h2>
      </div>
      <div>
        <ContactInformation locale={locale} />
      </div>
    </section>
  );
}
