"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
