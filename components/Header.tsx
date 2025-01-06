import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslations } from "../lib/getTranslations";

export default function Header({ locale }: { locale: string }) {
  const translations = getTranslations(locale);
  return (
    <div className="header mx-auto d-flex justify-content-between">
      <div className="d-flex flex-column justify-content-between">
        <img src="/glasses.png" alt="App Logo" width={80} height={16} />
        <h3 className="m-0">{translations.name}</h3>
      </div>
      <div className="d-flex">
        <LanguageSwitcher locale={locale} />
        <button className="btn btn-primary btn-lg ml-1">Download CV</button>
      </div>
    </div>
  );
}
