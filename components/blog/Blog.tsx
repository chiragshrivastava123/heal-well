import Image from "next/image";
import Link from "next/link";
import Footer from "../footer/Footer";
import FloatingEnquiryButton from "../floatingEnqBtn/FloatingEnqBtn";

export default function Blog() {
  return (
    <main className="bg-[#f8f9f6]">

      {/* HERO IMAGE */}
      <section className="w-full mb-12 mt-22">
        <div className="relative h-[85px] md:h-[125px] w-full overflow-hidden">
          <Image
            src="/Blog_Hero_bg.png"
            alt="Natural wellness blog hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-transparent" />

          <div className="absolute inset-0 z-10 flex items-center">
            <div className="px-4 md:px-0 md:ml-20 max-w-md">
              <h1 className="text-2xl md:text-3xl font-serif text-[#2f3e2e]">
                Our Blog
              </h1>

              <p className="mt-1 text-base text-[#555] md:hidden text-sm">
                Homeopathy, Naturopathy, & Nutrition
              </p>

              <p className="mt-1 text-lg text-[#555] hidden md:block">
                Insights on Homeopathy, Naturopathy, & Nutrition
                to support everyday well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16 space-y-8">

        {/* BLOG 1 */}
        <Link href="/blog/natural-remedies" className="block">
          <article className="bg-white rounded-xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition cursor-pointer">

            <div className="relative w-full md:w-[280px] h-[180px] rounded-lg overflow-hidden">
              <Image
                src="/Natural_Healing.png"
                alt="Natural remedies and holistic healing"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-serif text-[#2f3e2e]">
                The Benefits of Natural Remedies: A Guide to Holistic Healing
              </h2>

              <p className="mt-3 text-[#5f6f5f]">
                Discover how natural remedies support the body’s healing process.
                Learn how homeopathy, naturopathy, & nutrition work together to
                promote overall Health.
              </p>

              <p className="mt-4 text-[#4a6b4a] font-medium">
                Read More →
              </p>
            </div>

          </article>
        </Link>

        {/* BLOG 2 */}
        <Link href="/blog/homeopathy" className="block">
          <article className="bg-white rounded-xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition cursor-pointer">

            <div className="relative w-full md:w-[280px] h-[180px] rounded-lg overflow-hidden">
              <Image
                src="/Homeopathy.jpg"
                alt="Understanding homeopathy basics"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-serif text-[#2f3e2e]">
                Homeopathy Explained: Basics, Principles, and Natural Healing
              </h2>

              <p className="mt-3 text-[#5f6f5f]">
                An introductory overview of homeopathy and its core principles.
                Understand how this gentle system supports long-term health.
              </p>

              <p className="mt-4 text-[#4a6b4a] font-medium">
                Read More →
              </p>
            </div>

          </article>
        </Link>

        {/* BLOG 3 */}
        <Link href="/blog/naturopathy" className="block">
          <article className="bg-white rounded-xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition cursor-pointer">

            <div className="relative w-full md:w-[280px] h-[180px] rounded-lg overflow-hidden">
              <Image
                src="/Naturopathy.jpg"
                alt="Naturopathy and natural wellness"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-serif text-[#2f3e2e]">
                Naturopathy: Understanding Natural Healing & Herbal Medicine
              </h2>

              <p className="mt-3 text-[#5f6f5f]">
                Learn the foundations of naturopathy with focus on prevention,
                balance, and natural care.
              </p>

              <p className="mt-4 text-[#4a6b4a] font-medium">
                Read More →
              </p>
            </div>

          </article>
        </Link>

        {/* BLOG 4 */}
        <Link href="/blog/nutrition" className="block">
          <article className="bg-white rounded-xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition cursor-pointer">

            <div className="relative w-full md:w-[280px] h-[180px] rounded-lg overflow-hidden">
              <Image
                src="/Nutrition.png"
                alt="Nutrition and balanced lifestyle"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-serif text-[#2f3e2e]">
                Nutrition and Health: The Foundation of a Balanced Lifestyle
              </h2>

              <p className="mt-3 text-[#5f6f5f]">
                Explore how balanced eating habits and mindful food choices support
                long-term well-being.
              </p>

              <p className="mt-4 text-[#4a6b4a] font-medium">
                Read More →
              </p>
            </div>

          </article>
        </Link>

      </section>

      <FloatingEnquiryButton />
      <Footer />
    </main>
  );
}