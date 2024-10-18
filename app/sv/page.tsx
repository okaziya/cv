import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Välkommen till den svenska versionen av webbplatsen!</h1>
      <Link href="/en">Switch to English</Link>
    </div>
  );
}
