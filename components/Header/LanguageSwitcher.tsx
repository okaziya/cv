import Image from "next/image";
import { Locale } from "../../types";
import { StyledLanguageSwitcher } from "./LanguageSwitcher.styles";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const nextLocale = locale === "sv" ? "en" : "sv";
  const flagSrc = nextLocale === "sv" ? "/flags/sv.png" : "/flags/en.png";

  return (
    <StyledLanguageSwitcher
      href={`/${nextLocale}`}
      className="language-switcher mx-1 align-items-center btn btn-light d-flex p-3 border-0"
    >
      <Image
        src={flagSrc}
        alt={`Switch to ${nextLocale}`}
        width={24}
        height={24}
        unoptimized
      />
    </StyledLanguageSwitcher>
  );
}
