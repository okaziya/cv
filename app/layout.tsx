import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { ReactNode } from "react";
import ThemeWrapper from "../components/ThemeWrapper";
import localFont from "next/font/local";

export const metadata = {
  title: "Liza's SV",
  describtion: "CV of the Liza Blomdahl",
};

const nunitoSans = localFont({
  src: [
    {
      path: "../public/fonts/NunitoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NunitoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={nunitoSans.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
