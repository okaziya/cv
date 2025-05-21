"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

import { ImageWrapper, StyledHeader } from "./Header.styles";
import { getImagePath } from "../../utils/imagePath";

import DownloadPdfButton from "./DownloadPdfLink";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";

export default function Header() {
  const { locale } = useLocale();

  const translations = getTranslation(locale);

  return (
    <StyledHeader className="mx-auto d-flex justify-content-between">
      <div className="d-flex flex-column justify-content-between">
        <ImageWrapper>
          <Image
            src={getImagePath("/glasses.png")}
            alt={translations.images.logoAlt}
            width={80}
            height={16}
            priority
            unoptimized
          />
        </ImageWrapper>
        <h3 className="m-0">{translations.name}</h3>
      </div>
      <div className="d-flex align-items-center">
        <LanguageSwitcher />
        <DownloadPdfButton />
      </div>
    </StyledHeader>
  );
}
