import React from "react";

import { ReactNode } from "react";
import ThemeWrapper from "../components/ThemeWrapper";

export const metadata = {
  title: "Liza's SV",
  describtion: "CV of the Liza Blomdahl",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <ThemeWrapper>
        <body>{children}</body>
      </ThemeWrapper>
    </html>
  );
}
