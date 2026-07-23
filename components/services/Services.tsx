import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import FloatingEnquiryButton from "../floatingEnqBtn/FloatingEnqBtn";

export default function Services() {
  return (
    <main className="bg-white text-[#1E2D24]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Services_Hero_img.png"
            alt="Soft botanical background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-28 sm:pt-32 lg:pt-28 pb-12">
          <h1 className="font-playfair text-[38px] md:text-[48px] lg:text-[52px] text-[#1F4D3A] leading-tight">
            Holistic Care for a <br className="hidden md:block" /> Range of Health Concerns
          </h1>

          <p className="mt-6 max-w-2xl text-[16.5px] md:text-[18px] text-[#3F5E50] leading-relaxed">
            Our services are designed to address both chronic and everyday health
            concerns through personalized consultations, careful assessment, and
            gentle natural therapies focused on long-term balance.
          </p>
        </div>

        {/* Smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ================= SERVICES INTRO ================= */}
      <section className="pt-6 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 text-[#1e462f] text-sm font-medium uppercase tracking-wider">
            <span className="inline-block w-8 h-[2px] bg-[#6FAF8A]" />
            Our Services
            <span className="inline-block w-8 h-[2px] bg-[#6FAF8A]" />
          </div>

          <h2 className="mt-5 font-playfair text-[34px] md:text-[42px] text-[#1F4D3A] leading-tight">
            Personalized Care for Your Wellness Journey
          </h2>

          <p className="mt-4 text-[#5F6F67] max-w-3xl mx-auto text-[16px]">
            Individual consultations designed to support your health naturally
            and steadily.
          </p>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ServiceCard
            title="Initial Consultation"
            duration="60 – 90 min"
            image="/Initial_Consultation.png"
            description="A comprehensive session to understand your health, lifestyle, and concerns, forming a treatment plan tailored to you."
            points={[
              "In-depth health assessment",
              "Personalized treatment plan",
              "Diet & lifestyle guidance",
              "Recommendations for natural therapies",
            ]}
          />

          <ServiceCard
            title="Follow-up Consultation"
            duration="30 – 40 min"
            image="/Follow_up.png"
            description="Review progress, refine your plan, and continue care with steady guidance and support."
            points={[
              "Progress evaluation",
              "Treatment plan adjustment",
              "Address new concerns",
              "Ongoing support and guidance",
            ]}
          />
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-20 bg-[#F3F8F5] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/leaf-bg.svg')] opacity-30" />

        <div className="relative z-10 text-center px-6">
          <h3 className="font-playfair text-[30px] md:text-[34px] text-[#1F4D3A]">
            Ready to Begin Your Healing Journey?
          </h3>

          <p className="mt-3 text-[#5F6F67]">
            Book a consultation with our holistic practitioners.
          </p>

          <Link href="/enquiry">
            <button className="mt-8 rounded-full bg-[#2E6B4E] px-8 py-3 text-white text-sm font-medium cursor-pointer hover:bg-[#255B42] transition">
              Book Consultation
            </button>
          </Link>
        </div>
      </section>

      <FloatingEnquiryButton />
      <Footer />

    </main>
  );
}

/* ================= SERVICE CARD ================= */

function ServiceCard({
  title,
  duration,
  image,
  description,
  points,
}: {
  title: string;
  duration: string;
  image: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="bg-white rounded-[26px] border border-[#E5EFE9] p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-8">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full rounded-[20px] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#E9F3EC] text-[#2E6B4E] text-sm">
            🍃
          </div>

          <h3 className="mt-3 font-playfair text-[22px] text-[#1F4D3A]">
            {title}
          </h3>

          <span className="inline-block mt-2 w-fit rounded-full bg-[#E9F3EC] px-3 py-[4px] text-xs text-[#2E6B4E] font-medium">
            {duration}
          </span>

          <p className="mt-4 text-[15px] text-[#5F6F67] leading-relaxed">
            {description}
          </p>

          <ul className="mt-5 space-y-2">
            {points.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[#1E2D24]"
              >
                <span className="mt-[7px] h-2 w-2 rounded-full bg-[#6FAF8A]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}