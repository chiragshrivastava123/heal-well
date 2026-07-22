import NaturopathyBlog from "@/components/blog/naturopathy/NaturopathyBlog";
import NutritionBlog from "@/components/blog/nutrition/NutritionBlog";
import HomeopathyBlog from "@/components/blog/homeopathy/HomeopathyBlog";
import NaturalRemediesBlog from "@/components/blog/naturalRemedies/NaturalRemediesBlog";

export const blogs = [
  {
    slug: "naturopathy",
    title: "Naturopathy",
    Component: NaturopathyBlog,
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    Component: NutritionBlog,
  },
  {
    slug: "homeopathy",
    title: "Homeopathy",
    Component: HomeopathyBlog,
  },
  {
    slug: "natural-remedies",
    title: "Natural Remedies",
    Component: NaturalRemediesBlog,
  },
];