"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const locale = navigator.language.startsWith("sv") ? "sv" : "en";
    router.replace(`/${locale}`);
  }, []);

  return (
    <div>
      <p>Redirecting to your language...</p>
    </div>
  );
}
