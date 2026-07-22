import Image from "next/image";
import Footer from "../../footer/Footer";
import FloatingEnquiryButton from "../../floatingEnqBtn/FloatingEnqBtn";
export default function NutritionBlog() {
  return (
    <main className="w-full bg-[#f8f9f6] text-[#111827]">

      {/* ================= HERO / INTRO ================= */}
{/* ================= HERO / INTRO ================= */}
<section className="relative w-full">


  {/* IMAGE */}
<div className="relative w-full h-[70vh] min-h-[420px] md:h-[90vh] lg:h-[95vh] overflow-hidden mt-5">
  <Image
    src="/Blog_Nutrition_Hero.png"
    alt="Nutrition and wellbeing"
    fill
    priority
    

    className="
  object-cover
  object-left
  md:object-[80%_center]
  lg:object-center
"
  />
</div>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto px-6 pt-5 md:absolute md:inset-0 md:pt-20 lg:pt-20">
    <div className="md:ml-auto max-w-2xl md:mt-24">
      <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#2f6b4f]">
        Nutrition as a Foundation for Long-Term Health
      </h1>

      <p className="mt-5 text-lg md:text-xl leading-relaxed text-gray-900">
        Nutrition is not simply about food choices. It is one of the most
        influential factors shaping digestion, metabolism, immune regulation,
        and the body’s capacity to maintain balance over time.
      </p>

      <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-800">
        When approached with structure and consistency, nutrition becomes a
        stabilising force that supports health without reliance on rigid plans
        or short-term trends.
      </p>
    </div>
  </div>

</section>
      {/* ================= ROLE OF NUTRITION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
          The Role of Nutrition
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Nutrition provides the foundational resources required for every
            physiological process. Cellular repair, hormone production, nervous
            system function, and immune response all depend on the quality and
            consistency of nutritional intake.
          </p>

          <p>
            When nutritional support is insufficient or poorly aligned with
            individual needs, the effects often develop gradually. Persistent
            fatigue, digestive discomfort, difficulty managing weight, reduced
            recovery, and increased sensitivity to stress are frequently linked
            to underlying nutritional imbalance.
          </p>

          <p>
            A modern nutritional approach does not isolate nutrients or follow
            universal formulas. Instead, it considers food quality, digestive
            capacity, meal timing, and lifestyle demands to support long-term
            physiological stability.
          </p>
        </div>
      </section>

      {/* ================= GUT HEALTH ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
          Gut Health
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Gut health plays a central role in determining how effectively the
            body can utilise nutrition. Even the most balanced diet offers
            limited benefit if digestion is weakened or under constant stress.
          </p>

          <p>
            The digestive system influences immune regulation, inflammatory
            balance, metabolic stability, and nervous system function. Ongoing
            disruption in gut health may contribute to bloating, fatigue, food
            sensitivities, irregular digestion, and systemic imbalance.
          </p>

          <p>
            Nutritional strategies that support gut health often focus on
            simplifying food choices, maintaining regular meal patterns, and
            reducing dietary stressors. Over time, this allows digestive
            efficiency to improve and enhances the body’s ability to benefit
            fully from nourishment.
          </p>
        </div>
      </section>

      {/* ================= CONDITIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
          Conditions Nutrition May Support
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            When nutrition is aligned with individual physiology and lifestyle,
            it can provide meaningful support across a wide range of health
            concerns. While not a substitute for medical care, appropriate
            nutrition strengthens the body’s ability to regulate and recover.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>Digestive discomfort, bloating, and irregular digestion</li>
            <li>Persistent fatigue and low energy levels</li>
            <li>Weight regulation and metabolic imbalance</li>
            <li>Food sensitivities and inflammatory tendencies</li>
            <li>Nutritional depletion linked to chronic stress</li>
          </ul>

          <p>
            In these situations, nutritional support focuses on restoring balance
            rather than suppressing symptoms, allowing improvement to develop
            gradually and sustainably.
          </p>
        </div>
      </section>

      {/* ================= NUTRITION PHILOSOPHY ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Nutrition Philosophy
        </h2>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            Nutrition should support daily life rather than dominate it.
            Sustainable health outcomes are achieved when nourishment fits
            naturally into routine without excessive restriction.
          </p>

          <p>
            Individual differences matter. Digestive strength, metabolic
            response, stress exposure, and lifestyle demands all influence how
            the body responds to food.
          </p>

          <p>
            Consistency produces better outcomes than intensity. Gentle,
            well-aligned nutritional choices applied over time are more effective
            than short-term interventions.
          </p>

          <p>
            Digestive capacity determines nutritional value. What matters is not
            only what is eaten, but how well it can be processed and absorbed.
          </p>

          <p>
            Nutrition works best when integrated with sleep, movement, emotional
            wellbeing, and daily rhythm.
          </p>
        </div>
      </section>

      {/* ================= PERSONALISED SUPPORT ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Personalised Nutrition Support
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Personalised nutrition considers digestion, routine, health
                history, preferences, and long-term goals to create guidance
                that is practical and sustainable.
              </p>

              <p>
                This approach supports long-term stability rather than short-term
                correction, strengthening the body’s ability to adapt over time.
              </p>

              <p>
                Nutritional guidance evolves as the body responds, ensuring that
                support remains relevant and aligned with changing needs.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[300px] md:h-[420px] lg:h-[350px] rounded-xl overflow-hidden">
            <Image
              src="/Blog_Nutrition.png"
              alt="Personalised nutrition guidance"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <FloatingEnquiryButton />
      <Footer />

    </main>
  );
}