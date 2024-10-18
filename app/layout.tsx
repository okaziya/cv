import React from "react";

export const metadata = {
  title: "Liza's SV",
  describtion: "CV of the Liza Blomdahl",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
