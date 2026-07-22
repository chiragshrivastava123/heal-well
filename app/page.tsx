import type { Metadata } from "next";

import Hero from "@/components/home/hero/Hero";
import Support from "@/components/home/support/Support";
import Treatment from "@/components/home/methods/Methods";
import Approach from "@/components/Approach/Approach";
import FloatingEnquiryButton from "@/components/floatingEnqBtn/FloatingEnqBtn";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "HealWell - Natural Therapies",
  description:
    "HealWell Natural Therapies provides natural health consultations including Homeopathy, Naturopathy and Nutrition services to support your wellbeing across Australia.",
  keywords: [
    "Homeopathy Australia",
    "Naturopathy Australia",
    "Nutrition Consultation",
    "Natural Therapies",
    "Holistic Health",
    "HealWell Natural Therapies",
  ],
};


export default function HomePage() {
  return (
    <main>
      <Hero />
      <Support />
      <Treatment />
      <Approach />
      <FloatingEnquiryButton />
      <Footer />
    </main>
  );
}