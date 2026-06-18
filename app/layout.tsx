import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alavie Restaurant",
  description: "Exceptional dining, cocktails and unforgettable atmosphere in Accra.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}