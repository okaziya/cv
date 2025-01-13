import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslations } from "../../lib/getTranslations";
import { Locale } from "../../types";
import Button from "../Button";

export default function Header({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);
  return (
    <div className="header mx-auto d-flex justify-content-between">
      <div className="d-flex flex-column justify-content-between">
        <img src="/glasses.png" alt="App Logo" width={80} height={16} />
        <h3 className="m-0">{translations.name}</h3>
      </div>
      <div className="d-flex">
        <LanguageSwitcher locale={locale} />
        <Button>Download CV</Button>
      </div>
    </div>
  );
}
