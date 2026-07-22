import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Replace after buying your domain

  title: {
    default: "HealWell Natural Therapies",
    template: "%s | HealWell Natural Therapies",
  },

  description:
    "HealWell Natural Therapies offers professional Homeopathy, Naturopathy and Nutrition consultations to support your health naturally across Australia.",

  keywords: [
    "Homeopathy",
    "Naturopathy",
    "Nutrition",
    "Natural Therapies",
    "Holistic Health",
    "Alternative Medicine",
    "Australia",
    "Natural Health",
  ],

  authors: [
    {
      name: "HealWell Natural Therapies",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "HealWell Natural Therapies",
    description:
      "Professional Homeopathy, Naturopathy and Nutrition consultations in Australia.",
    url: "https://your-domain.com",
    siteName: "HealWell Natural Therapies",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HealWell Natural Therapies",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}


