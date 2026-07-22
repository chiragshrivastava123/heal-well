import Link from "next/link";

export default function Methods() {
  
  return (
    <section className="w-full bg-[#e0f1e0] py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#113a11]  leading-tight">
            Our Core Methods
          </h2>
          {/* <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-base text-[#4a6b4a] ">
            Three integrated disciplines designed to support natural, sustainable well-being.
          </p> */}
        </div>

        {/* Approaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Naturopathy */}
          <div className="rounded-2xl bg-white text-center p-6 shadow-sm flex flex-col justify-between mx-[60px] sm:mx-0">
            <div>
              <div className="mb-4 text-5xl sm:text-6xl">🌿</div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2e612e]">
                Naturopathy
              </h3>
              <p className="mt-3 text-sm sm:text-lg text-green-800 leading-relaxed">
                Stress management
                <br />
                Lifestyle balance
                <br />
                Mind-body techniques
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/blog/naturopathy"
                className="text-sm sm:text-base font-medium text-[#113a11] hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Homeopathy */}
          <div className="rounded-2xl bg-white text-center p-6 shadow-sm flex flex-col justify-between mx-[60px] sm:mx-0">
            <div>
              <div className="mb-4 text-5xl sm:text-6xl">🧪</div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#113a11]">
                Homeopathy
              </h3>
              <p className="mt-3 text-sm sm:text-lg text-green-800 leading-relaxed">
                Individualized remedies
                <br />
                Chronic & acute care
                <br />
                Gentle, non-invasive
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/blog/homeopathy"
                className="text-sm sm:text-base font-medium text-[#113a11] hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Nutrition */}
          <div className="rounded-2xl bg-[#fcfdfc] p-6 sm:p-8 text-center shadow-sm flex flex-col justify-between mx-[60px] sm:mx-0">
            <div>
              <div className="mb-4 text-5xl sm:text-6xl">🌱</div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#113a11]">
                Nutrition
              </h3>
              <p className="mt-3 text-sm sm:text-lg text-green-800 leading-relaxed">
                Personalized plans
                <br />
                Digestive health
                <br />
                Energy & immunity
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/blog/nutrition"
                className="text-sm sm:text-base font-medium text-[#113a11] hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-[#113a11] px-8 py-3 text-sm font-medium text-[#113a11] transition hover:bg-[#2f5d3a] hover:text-white"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
