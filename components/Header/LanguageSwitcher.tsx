"use client";

import Image from "next/image";
import { StyledLanguageSwitcher } from "./LanguageSwitcher.styles";
import { getImagePath } from "../../utils/imagePath";
import { useLocale } from "../../context/LocaleContext";

export default function LanguageSwitcher() {
  const { locale } = useLocale();

  const nextLocale = locale === "sv" ? "en" : "sv";
  const flagSrc = nextLocale === "sv" ? "/flags/sv.png" : "/flags/en.png";

  return (
    <StyledLanguageSwitcher
      href={`/${nextLocale}`}
      className="language-switcher mx-1 align-items-center btn btn-light d-flex p-2 p-lg-3 border-0"
    >
      <Image src={getImagePath(flagSrc)} alt={`Switch to ${nextLocale}`} width={24} height={24} unoptimized />
    </StyledLanguageSwitcher>
  );
}
