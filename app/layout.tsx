import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { SITE_INFO } from "../config";

import { ReactNode } from "react";
import ThemeWrapper from "../components/ThemeWrapper";

import { nunitoSans } from "../styles/fonts";

export const metadata = {
  title: SITE_INFO.title,
  describtion: SITE_INFO.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={nunitoSans.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
