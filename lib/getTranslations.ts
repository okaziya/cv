import en from "../locales/en.json";
import sv from "../locales/sv.json";

export function getTranslations(locale: string) {
  switch (locale) {
    case "sv":
      return sv;
    case "en":
    default:
      return en;
  }
}
