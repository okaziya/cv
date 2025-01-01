"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
