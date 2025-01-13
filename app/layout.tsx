import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { ReactNode } from "react";
import ThemeWrapper from "../components/ThemeWrapper";

import { nunitoSans } from "../styles/fonts";

export const metadata = {
  title: "Liza's SV",
  describtion: "CV of the Liza Blomdahl",
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
