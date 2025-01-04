import { getTranslations } from "../../lib/getTranslations";

export async function generateStaticParams() {
  const locales = ["en", "sv"];
  return locales.map((locale) => ({ locale }));
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
