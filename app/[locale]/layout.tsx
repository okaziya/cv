import { getTranslations } from "../../lib/getTranslations";

export async function generateStaticParams() {
  const locales = ["en", "sv"];
  return locales.map((locale) => ({ locale }));
}

import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

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
    <html lang={locale} className={nunitoSans.variable}>
      <body>
        <header>{translations.welcome}</header>
        {children}
        <footer>{translations.description}</footer>
      </body>
    </html>
  );
}
