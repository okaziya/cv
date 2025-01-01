"useClient";

import { getTranslations } from "../../lib/getTranslations";
import GlobalStyle from "../../styles/GlobalStyles";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sv" }];
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
        <GlobalStyle />
        {children}
        <footer>{translations.description}</footer>
      </body>
    </html>
  );
}
