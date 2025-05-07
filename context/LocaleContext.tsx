"use client";

import { createContext, useContext } from "react";
import { Locale } from "../types";

interface LocaleContextProps {
  locale: Locale;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ locale, children }: { locale: Locale; children: React.ReactNode }) => {
  return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = (): LocaleContextProps => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
