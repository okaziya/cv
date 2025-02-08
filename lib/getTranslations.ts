import en from "../locales/en";
import sv from "../locales/sv";

export function getTranslations(locale: string) {
  switch (locale) {
    case "sv":
      return sv;
    case "en":
    default:
      return en;
  }
}
