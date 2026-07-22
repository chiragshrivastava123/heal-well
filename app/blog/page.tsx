import type { Metadata } from "next";
import React from "react";
import Blog from "../../components/blog/Blog";

export const metadata: Metadata = {
  title: "Health Blog | Natural Health Tips & Wellness Articles",
  description:
    "Read the latest articles from HealWell Natural Therapies on Homeopathy, Naturopathy, Nutrition, natural health, and holistic wellness to help you make informed health decisions.",
  keywords: [
    "Health Blog",
    "Homeopathy Articles",
    "Naturopathy Blog",
    "Nutrition Tips",
    "Natural Health",
    "Holistic Wellness",
    "Wellness Blog Australia",
    "HealWell Blog",
  ],
};

function Blogs() {
  return (
    <div>
      <Blog />
    </div>
  );
}

export default Blogs;