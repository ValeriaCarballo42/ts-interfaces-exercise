import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TS Interfaces Exercise",
  description: "Completá las interfaces para que el build pase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
