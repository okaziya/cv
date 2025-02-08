import { getTranslations } from "../lib/getTranslations";
import { Locale } from "../types";

import { montserratExtraBold } from "../styles/fonts";
import ContactInformation from "./ContactInformation";

export default function Footer({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);
  return (
    <footer className="footer align-items-center d-flex flex-column">
      <h1 className={`${montserratExtraBold.className} mt-0 mb-4 pb-3`}>{translations.contact.title}</h1>
      <ContactInformation locale={locale} />
    </footer>
  );
}
