"use client";

import { getImagePath } from "../../utils/imagePath";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import { PrimaryButton } from "./DownloadPdfButton.styles";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { getTranslation } from "../../lib/getTranslation";
import CvDocument from "../CvDocument";
import { useLocale } from "../../context/LocaleContext";

export default function DownloadPdfButton() {
  const { locale } = useLocale();
  const translations = getTranslation(locale);
  const isMobile = useIsMobile();

  return (
    <PrimaryButton>
      <PDFDownloadLink
        document={<CvDocument />}
        fileName="Liza-Blomdahl-CV.pdf"
        style={{ all: "unset", cursor: "pointer" }}
      >
        {({ loading }) =>
          loading ? (
            "Loading PDF..."
          ) : isMobile ? (
            <>
              <span className="pe-1 fw-light">CV</span>
              <Image
                src={getImagePath("/download.png")}
                alt="download icon for the PDF file"
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
      </PDFDownloadLink>
    </PrimaryButton>
  );
}
