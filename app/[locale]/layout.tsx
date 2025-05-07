import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { LocaleProvider } from "../../context/LocaleContext";
import { Locale } from "../../types";

export async function generateStaticParams(): Promise<{ locale: Locale }[]> {
  const locales: Locale[] = ["en", "sv"];
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: Locale } }) {
  return (
    <LocaleProvider locale={params.locale}>
      <Header />
      <main className="main-content m-auto">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
