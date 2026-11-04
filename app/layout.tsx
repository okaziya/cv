import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import React from "react";
import { SITE_INFO, SITE_URL } from "../config";

import { ReactNode } from "react";
import StyledComponentsRegistry from "../lib/registry";
import ThemeWrapper from "../components/ThemeWrapper";
import { nunitoSans } from "../styles/fonts";

export const metadata = {
  title: SITE_INFO.title,
  description: SITE_INFO.description,
  icons: {
    icon: `/cv/favicon.ico`,
  },
  alternates: {
    languages: {
      en: `${SITE_URL}/en`,
      sv: `${SITE_URL}/sv`,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className={nunitoSans.className}>
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="24a69cac-c400-483f-a3d1-be3527ddc341" />
        <StyledComponentsRegistry>
          <ThemeWrapper>{children}</ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
