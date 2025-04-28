"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme as baseTheme } from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import { useBrowserName } from "../hooks/useBrowserName";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  const browser = useBrowserName();

  const isSafari = browser?.name === "Safari";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isReady = isMounted && browser;

  if (!isReady) {
    return null;
  }

  const theme = { ...baseTheme, isSafari };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
