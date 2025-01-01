"useClient";

import { getTranslations } from "../../lib/getTranslations";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sv" }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  const translations = getTranslations(locale);

  return (
    <html lang={locale}>
      <body>
        <header>{translations.welcome}</header>
        {children}
        <footer>{translations.description}</footer>
      </body>
    </html>
  );
}
