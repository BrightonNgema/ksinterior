import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keisha Sotaka - Interior Designer & Stylist",
  description:
    "Creating elevated, timeless spaces that feel both sophisticated and deeply personal. Residential & commercial interior design, custom furniture.",
  icons: {
    icon: "/images/logo/logo-mark.png",
    apple: "/images/logo/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
