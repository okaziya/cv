"use client";

import { useState, useEffect } from "react";
import { theme } from "../styles/theme";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileBreakpoint = theme.breakpoints.mobile;
    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint})`);

    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMobile;
}
