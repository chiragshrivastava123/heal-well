import type { Metadata } from "next";

import Services from "@/components/services/Services";

export const metadata: Metadata = {
  title: "Services | Initial & Follow-up Consultations",
  description:
    "Explore HealWell Natural Therapies services, including Initial Consultations and Follow-up Consultations for Homeopathy, Naturopathy and Nutrition to support your long-term health and wellbeing.",
  keywords: [
    "Initial Consultation",
    "Follow-up Consultation",
    "Homeopathy Consultation",
    "Naturopathy Consultation",
    "Nutrition Consultation",
    "Natural Therapies Australia",
    "Holistic Health",
    "HealWell Services",
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  );
}