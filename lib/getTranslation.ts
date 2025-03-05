import en from "../locales/en";
import sv from "../locales/sv";

import { Locale } from "../types";

const translations = { en, sv };

export function getTranslation(locale: Locale) {
  return translations[locale] ?? en;
}
