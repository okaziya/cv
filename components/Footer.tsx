"use client";

import { useLocale } from "../context/LocaleContext";
import { getTranslation } from "../lib/getTranslation";

import { montserratExtraBold } from "../styles/fonts";
import ContactInformation from "./ContactInformation";

export default function Footer() {
  const { locale } = useLocale();
  const translations = getTranslation(locale);
  return (
    <footer className="footer align-items-center d-flex flex-column">
      <h1 className={`${montserratExtraBold.className} mt-0 mb-4 pb-3`}>{translations.contact.title}</h1>
      <ContactInformation />
    </footer>
  );
}
