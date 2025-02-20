"use client";

import { Locale } from "../../types";
import { getImagePath } from "../../utils/imagePath";
import Image from "next/image";
import { getTranslations } from "../../lib/getTranslations";
import useIsMobile from "../../hooks/useIsMobile";
import { PrimaryButton } from "./DownloadPdfButton.styles";

export default function DownloadPdfButton({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

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
