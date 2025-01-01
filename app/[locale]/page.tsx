import React from "react";
import Link from "next/link";
import { getTranslations } from "../../lib/getTranslations";

export default function LocaleHomePage({
  params,
}: {
  params: { locale: string };
}) {
  const translations = getTranslations(params.locale);
  return (
    <div>
      <Link href={`/${params.locale === "sv" ? "en" : "sv"}`}>
        {translations.switchLanguage}
      </Link>
    </div>
  );
}
