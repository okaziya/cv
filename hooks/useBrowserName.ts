"use client";

import { useEffect, useState } from "react";
import Bowser, { Parser } from "bowser";

type BrowserInfo = {
  name: string;
  version: string;
};

export function useBrowserName(): BrowserInfo | null {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parser: Parser.Parser = Bowser.getParser(window.navigator.userAgent);
      const browser = parser.getBrowser();
      setBrowserInfo({ name: browser.name ?? "Unknown", version: browser.version ?? "Unknown" });
    }
  }, []);

  return browserInfo;
}
