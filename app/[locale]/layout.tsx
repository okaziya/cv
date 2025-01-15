import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Locale } from "../../types";

export async function generateStaticParams(): Promise<{ locale: Locale }[]> {
  const locales: Locale[] = ["en", "sv"];
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;

  return (
    <>
      <Header locale={locale} />
      <main className="main-content m-auto">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
