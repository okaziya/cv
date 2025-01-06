import Image from "next/image";
import Link from "next/link";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const nextLocale = locale === "sv" ? "en" : "sv";
  const flagSrc = nextLocale === "sv" ? "/flags/sv.png" : "/flags/en.png";

  return (
    <Link
      href={`/${nextLocale}`}
      className="language-switcher mx-1 align-items-center btn btn-light d-flex p-3 border-0"
    >
      <Image
        src={flagSrc}
        alt={`Switch to ${nextLocale}`}
        width={24}
        height={24}
      />
    </Link>
  );
}
