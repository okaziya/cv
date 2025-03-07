"use client";

import { getImagePath } from "../../utils/imagePath";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import { PrimaryButton } from "./DownloadPdfButton.styles";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";

export default function DownloadPdfButton() {
  const { locale } = useLocale();

  const translations = getTranslation(locale);

  const isMobile = useIsMobile();

  return (
    <PrimaryButton className="btn btn-primary btn-lg ml-1" disabled>
      {isMobile ? <span className="pe-1 fw-light">CV</span> : translations.downloadCv}
      {isMobile && (
        <Image
          src={getImagePath("/download.png")}
          alt={"download icon for the PDF file"}
          width={20}
          height={20}
          priority
          unoptimized
        />
      )}
    </PrimaryButton>
  );
}
