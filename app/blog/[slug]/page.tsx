import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return notFound();
  }

  const BlogComponent = blog.Component;

  return <BlogComponent />;
}