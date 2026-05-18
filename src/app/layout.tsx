import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ksinterior.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Keisha Sotaka — Interior Designer & Stylist | KS Interior",
    template: "%s | Keisha Sotaka",
  },
  description:
    "Keisha Sotaka is an interior designer and stylist creating elevated, timeless spaces. Residential & commercial interior design, custom furniture in South Africa.",
  keywords: [
    "Keisha Sotaka",
    "interior designer",
    "interior stylist",
    "KS Interior",
    "residential interior design",
    "commercial interior design",
    "custom furniture",
    "interior design South Africa",
    "luxury interior design",
    "home styling",
    "office interior design",
  ],
  authors: [{ name: "Keisha Sotaka", url: siteUrl }],
  creator: "Keisha Sotaka",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Keisha Sotaka — KS Interior",
    title: "Keisha Sotaka — Interior Designer & Stylist",
    description:
      "Creating elevated, timeless spaces that feel both sophisticated and deeply personal. Residential & commercial interior design, custom furniture.",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Keisha Sotaka Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keisha Sotaka — Interior Designer & Stylist",
    description:
      "Creating elevated, timeless spaces that feel both sophisticated and deeply personal.",
    images: ["/images/hero/hero-1.jpg"],
  },
  icons: {
    icon: "/images/logo/logo-mark.png",
    apple: "/images/logo/logo-mark.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
