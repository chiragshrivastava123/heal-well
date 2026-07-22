
import React from "react";
import Image from "next/image";




export default function AboutContent(
  
) {
  return (
    <div className="w-full min-h-screen bg-[#F4F3EF] text-[#2C3E35] font-sans px-4 md:px-8 pt-16 pb-0 selection:bg-[#2C3E35]/10">
      <div className="max-w-[1200px] mx-auto">

<section className="relative w-full bg-[#F4F3EF] flex items-center px-6 md:px-16 lg:px-24 pt-16 md:pt-24 pb-0 selection:bg-[#2C3E35]/10 overflow-hidden">
      
      {/* BACKGROUND IMAGE CONTAINER */}
      <div 
        className="absolute inset-0 w-(full-20) h-full  z-0"
        style={{ backgroundImage: "url('/About_hero.png')" }}
      />

      {/* Content Overlay Layout Wrapper */}
      <div className="relative z-10 max-w-[1100px] w-full mx-auto">
        
        {/* Main Typographic Stack - Spanned wider to fix empty layout voids */}
        <div className="space-y-6 md:space-y-8 max-w-[720px] lg:max-w-[780px]">
          
          {/* Main Headings */}
          <div className="space-y-2 md:space-y-3">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-[52px] font-normal tracking-wide uppercase text-[#1A2E26] leading-none">
              ABOUT HEALWELL
            </h1>
            <p className="font-serif font-light text-2xl md:text-3xl lg:text-[32px] italic text-[#2C3E35] tracking-wide">
              Rooted in Nature. Guided by Purpose.
            </p>
          </div>

          {/* Thin Clean Decorative Divider Line */}
          <div className="w-full max-w-[550px] h-[1px] bg-[#2C3E35]/15" />

          {/* Core Introduction Paragraph */}
          <p className="font-sans font-light text-[15px] md:text-[16.5px] text-[#4A5D54] leading-relaxed max-w-[580px] text-justify md:text-left">
            Healwell was created from a simple but deeply held belief — that healing should feel 
            personal, respectful, and rooted in understanding the whole individual, not just their symptoms.
          </p>

          

        </div>
      </div>
    </section>





        {/* ================= SECTION 2 ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start pb-20 border-b border-[#2C3E35]/15 mt-15 mb-10">

          {/* LEFT CONTENT */}
           <div className="space-y-8 px-4 sm:px-0">
            <h2 className="font-serif font-light text-2xl md:text-2xl leading-snug text-[#1A2E26]">
              Guided by Experience & Compassion
            </h2>

            <div className="space-y-6 text-[17px] text-[#3E5148] leading-relaxed text-justify">
              <p>


  I am a passionate about Naturopathy and am a qualified homeopath. Achieving good health
and happiness is an everyday quest for me. This passion has led me to explore various
interesting paths. I am deeply committed to my work, viewing health
                not as a fixed state but as a living, evolving relationship between
                body, mind, and environment.


              </p>
              <p>


Being spiritual, I have delved into energy healing, mindfulness, meditation, and years of
Buddhist practices.
                
              My work is informed by years of clinical experience combined with
                mindfulness, meditation, and spiritual study. These practices help
                me approach healing with patience, clarity, and presence.





              </p>



              <p>
                
                As a homeopath, I have worked in one of the leading Integrative medicine clinics alongside
some amazing medical and allied health professionals and assisted chronically ill patients
improve their health and their overall quality of life.
              </p>
            </div>
          </div>

          {/* RIGHT ICON GRID */}
          <div className="lg:border-l lg:border-[#2C3E35]/20 lg:pl-10">
            <h3 className="font-serif text-2xl font-light text-[#1A2E26] mb-10 pl-5 ">
              Qualifications & Associations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">

              {/* ICON ITEM TEMPLATE */}
              {[
                {
                  text: "Advanced Diploma in Naturopathy – Australasian College of Natural Therapies",
                  svg: (
                    <>
                      <path d="M22 9L12 4L2 9L12 14L22 9Z" />
                      <path d="M6 11V17C6 17 8 19 12 19C16 19 18 19 18 17V11" />
                      <path d="M22 9V15" />
                    </>
                  ),
                },
                {
                  text: "Master in Human Nutrition – Deakin University",
                  svg: (
                    <>
                      <path d="M12 8c-1.5-2.5-4.5-2.5-6 0C4.5 10.5 7.5 14.5 12 18c4.5-3.5 7.5-7.5 6-10c-1.5-2.5-4.5-2.5-6 0Z" />
                      <path d="M5 14c-1 1-1.5 2-1 3s2.5 1.5 4 .5M19 14c1 1 1.5 2 1 3s-2.5 1.5-4 .5" />
                    </>
                  ),
                },
                {
                  text: "Advanced Diploma in Aromatherapy",
                  svg: (
                    <>
                      <path d="M22 9L12 4L2 9L12 14L22 9Z" />
                      <path d="M6 11V17C6 17 8 19 12 19C16 19 18 19 18 17V11" />
                    </>
                  ),
                },
                {
                  text: "Diploma in Homeopathy",
                  svg: (
                    <>
                      <circle cx="12" cy="10" r="5" />
                      <path d="M9 14.5L7 21L12 19L17 21L15 14.5" />
                    </>
                  ),
                },
                {
                  text: "Advanced Diploma in Pranic Healing",
                  svg: (
                    <>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 11l2 2 4-4" />
                    </>
                  ),
                },
                {
                  text: "Member of WITA – Natural Therapies Association",
                  svg: (
                    <>
                      <path d="M12 21a6 6 0 0 0 6-6c0-3.5-3-7-6-11-3 4-6 7.5-6 11a6 6 0 0 0 6 6Z" />
                      <path d="M12 21v-8M8 14c1.5-1.5 3-2 4-2s2.5.5 4 2" />
                    </>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#2C3E35]/5 rounded-full flex items-center justify-center mb-3">
                    <svg
                      className="w-7 h-7 stroke-[#2C3E35] fill-none stroke-[1]"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.svg}
                    </svg>
                  </div>
                  <p className="text-[14.5px] text-[#2C3E35] leading-snug max-w-[190px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      



     {/* ================= WHY HEALWELL (UNCHANGED) ================= */}
  <section className="relative min-h-[700px] bg-[#f5f7f2]">
    <div className="mx-auto max-w-7xl px-6 lg:px-25 py-10 pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">

        {/* Image Block */}
    {/* Image Block */}
<div className="relative flex justify-center lg:justify-start w-full h-full">
  <Image
    src="/Why_Healwell_.png"
    alt="Fern symbolizing natural healing and growth"
    width={620}
    height={750}
    className="
      w-full
      h-full
      min-h-[450px]
      max-h-[550px]
      md:max-h-[650px]
      lg:max-h-[750px]
      max-w-[500px]npm run lint
      md:max-w-[550px]
      lg:max-w-[620px]
      object-cover
      rounded-xl
      sm:rounded-3xl
    "
  />
</div>

        {/* Text Content */}
        <div className="pb-10 max-w-xl md:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
          <h2 className="
            font-serif
            text-3xl
            md:text-[34px]
            lg:text-4xl
            text-[#2f5d3a]
            leading-tight
          ">
            Why Healwell Exists
          </h2>

          <div className="
            mt-8
            space-y-6
            text-[#3f4f46]
            text-[16.5px]
            md:text-[16px]
            lg:text-[16.5px]
            leading-relaxed
          ">
            <p>
              In a world where pharmaceutical solutions often dominate, many
              people feel trapped in cycles of temporary relief and unresolved
              imbalance. Healwell was born from a deeper need to approach
              health differently.
            </p>

            <p>
              We believe healing is not about suppressing symptoms, but about
              understanding the body as an intelligent, interconnected system.
              By addressing the root causes of imbalance, the body can begin
              to restore its own natural harmony.
            </p>

            <p>
              Through naturopathy, homoeopathy, and nutrition, we guide
              individuals toward sustainable, long-term wellness that respects
              the body’s innate ability to heal.
            </p>
          </div>

          <blockquote className="
            mt-10
            md:mt-4
            lg:mt-10
            pl-6
            border-l
            border-[#9bb8a6]
            italic
            text-[#2f5d3a]
          ">
            Healing begins when the body is listened to, not silenced.
          </blockquote>
        </div>

      </div>
    </div>
  </section>

      </div>
    </div>
  );
}