import type { Metadata } from "next";

import Enquiry from "@/components/enquiry/Enquiry";

export const metadata: Metadata = {
  title: "Book an Enquiry | Natural Health Consultation",
  description:
    "Book an enquiry with HealWell Natural Therapies for professional Homeopathy, Naturopathy and Nutrition consultations. Take the first step towards better health and wellbeing.",
  keywords: [
    "Book Consultation",
    "Natural Health Consultation",
    "Homeopathy Appointment",
    "Naturopathy Appointment",
    "Nutrition Consultation",
    "Book Enquiry",
    "HealWell Natural Therapies",
    "Australia",
  ],
};

export default function EnquiryPage() {
  return (
    <main>
      <Enquiry />
    </main>
  );
}