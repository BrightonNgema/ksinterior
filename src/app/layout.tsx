import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keisha Sotaka | Interior Stylist & Designer",
  description:
    "Bespoke residential & commercial interior styling. Custom furniture design, curated spaces, timeless elegance. Based in South Africa.",
  keywords: [
    "interior design",
    "interior stylist",
    "luxury interiors",
    "custom furniture",
    "residential design",
    "commercial design",
    "Keisha Sotaka",
    "South Africa",
  ],
  openGraph: {
    title: "Keisha Sotaka | Interior Stylist & Designer",
    description: "Crafting elevated, timeless interiors that feel both sophisticated and deeply personal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground grain">
        {children}
      </body>
    </html>
  );
}
