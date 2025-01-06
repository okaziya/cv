import Header from "../../components/Header";
import { getTranslations } from "../../lib/getTranslations";
import Link from "next/link";

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
        <Header locale={locale} />
        <main className="main-content m-auto">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
