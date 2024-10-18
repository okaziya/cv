import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the English version of the site!</h1>
      <Link href="/sv">Switch to Swedish</Link>
    </div>
  );
}
