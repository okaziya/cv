"use client";

import { getImagePath } from "../../utils/imagePath";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import { PrimaryButton } from "./DownloadPdfButton.styles";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { getTranslation } from "../../lib/getTranslation";
import MyPDFDocument from "../MyPDFDocument";
import { useLocale } from "../../context/LocaleContext";

export default function DownloadPdfButton() {
  const { locale } = useLocale();
  const translations = getTranslation(locale);
  const isMobile = useIsMobile();

  return (
    <PDFDownloadLink document={<MyPDFDocument />} fileName="example.pdf">
      {({ loading }): React.ReactNode => (
        <PrimaryButton className="btn btn-primary btn-lg ml-1">
          {loading ? (
            <span>Generating...</span>
          ) : isMobile ? (
            <span className="pe-1 fw-light">CV</span>
          ) : (
            translations.downloadCv
          )}
          {isMobile && !loading && (
            <Image
              src={getImagePath("/download.png")}
              alt="download icon for the PDF file"
              width={20}
              height={20}
              priority
              unoptimized
            />
          )}
        </PrimaryButton>
      )}
    </PDFDownloadLink>
  );
}
