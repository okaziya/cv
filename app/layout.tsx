import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { SITE_INFO } from "../config";

import { ReactNode } from "react";
import ThemeWrapper from "../components/ThemeWrapper";
import { nunitoSans } from "../styles/fonts";
import { Locale } from "../types";

export const metadata = {
  title: SITE_INFO.title,
  description: SITE_INFO.description,
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale}>
      <body className={nunitoSans.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
