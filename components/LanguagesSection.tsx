import React from "react";
import { montserratExtraBold } from "../styles/fonts";
import { getTranslations } from "../lib/getTranslations";

import { Locale } from "../types";

export default function LanguagesSection({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <section className="languages-section d-flex">
      <div>
        <h2 className={`${montserratExtraBold.className} section-first-column`}>
          Languages
        </h2>
      </div>
      <div>
        <h5 className="mb-3 mt-0 pb-1">{"Swedish – Intermediate (B1)"}</h5>
        <h5 className="mb-3 mt-0 pb-1">{"English – Advanced (C1)"}</h5>
        <h5 className="mb-3 mt-0">{"Czech – Proficient (C2)"}</h5>
      </div>
    </section>
  );
}
