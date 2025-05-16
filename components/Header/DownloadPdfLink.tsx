"use client";

import { getImagePath } from "../../utils/imagePath";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import { StyledPdfLink } from "./DownloadPdfLink.styles";
import { getTranslation } from "../../lib/getTranslation";
import CvDocument from "../CvDocument";
import { useLocale } from "../../context/LocaleContext";

export default function DownloadPdfButton() {
  const { locale } = useLocale();
  const translations = getTranslation(locale);
  const isMobile = useIsMobile();

  return (
    <StyledPdfLink document={<CvDocument />} fileName="Liza-Blomdahl-CV.pdf">
      {({ loading }) =>
        loading ? (
          "Loading PDF..."
        ) : isMobile ? (
          <>
            <span className="pe-1 fw-light">CV</span>
            <Image
              src={getImagePath("/download.png")}
              alt="download icon"
              width={20}
              height={20}
              priority
              unoptimized
            />
          </>
        ) : (
          translations.downloadCv
        )
      }
    </StyledPdfLink>
  );
}
