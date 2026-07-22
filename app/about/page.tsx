import type { Metadata } from "next";

import AboutContent from "@/components/About/About";
import Footer from "@/components/footer/Footer";
import FloatingButton from "@/components/floatingEnqBtn/FloatingEnqBtn";


export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HealWell Natural Therapies, our holistic approach to health, and our commitment to supporting wellbeing through Homeopathy, Naturopathy and Nutrition across Australia.",
  keywords: [
    "About HealWell",
    "Natural Therapies Australia",
    "Homeopathy",
    "Naturopathy",
    "Nutrition",
    "Holistic Health",
  ],
};


export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      <AboutContent />
      <FloatingButton />
      <Footer />
    </main>
  );
}