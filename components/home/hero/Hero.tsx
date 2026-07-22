"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[660px] md:h-[678px]">
      {/* Hero Image */}
      <Image
        src="/herobgimg.png"
        alt="Hero Image"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/10 to-transparent"></div>


      {/* Hero Text */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 min-h-[85vh] flex flex-col justify-start pt-50 pl-12">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-[#2f4f2f] leading-tight font-lato">
            Your Path to <br />
            Natural Healing
          </h1>

          <p className="mt-6 text-base sm:text-md lg:text-xl text-[#0e2b0e] max-w-sm lg:max-w-2xl font-lato">
            Naturopathy, Homoeopathy, and Nutrition for holistic well-being.
            Discover personalized wellness solutions that naturally restore health.
            Empower your body and mind with nature&apos;s healing touch.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md nav-bg px-6 py-3 text-white font-medium transform transition-all duration-300 ease-in-out hover:scale-89 hover:bg-[#345a34] hover:shadow-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

    


      <div className="absolute bottom-0 left-0 w-full h-[88px] bg-gradient-to-b from-transparent to-white" />

    </section>


    
  );
}