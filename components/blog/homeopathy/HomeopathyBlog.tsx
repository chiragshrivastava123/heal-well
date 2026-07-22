import Image from "next/image";
import Footer from "../../footer/Footer";
import FloatingEnquiryButton from "../../floatingEnqBtn/FloatingEnqBtn";

export default function HomeopathyPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[90vh] pt-[120px] pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Blog_Homeopathy.png"
            alt="Homeopathy remedies and holistic healing"
            fill
            priority
            className="object-cover object-center md:object-right"
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        <div className="relative px-6 md:px-12 lg:px-20 xl:px-28 pt-8 md:pt-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Homeopathy
              <span className="block mt-3 text-2xl md:text-3xl text-green-700 font-medium">
                Like cures like. Healing that begins within.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Homeopathy is a system of traditional medicine developed in the late
              eighteenth century, based on the idea that the body possesses an
              inherent capacity to regulate, adapt, and restore balance when gently
              stimulated.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Rather than focusing solely on disease labels, homeopathy emphasizes
              the individual experience of illness, considering physical symptoms,
              emotional responses, environmental sensitivities, and overall vitality.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: PRINCIPLE ================= */}
      <section className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-20">
        <h2 className="text-3xl font-semibold mb-10">
          The Principle of Homeopathy
        </h2>

        <div className="space-y-8 text-lg leading-relaxed text-gray-700">
          <p>
            The foundation of homeopathy lies in the principle known as
            <strong> Similia Similibus Curentur</strong>, a Latin phrase meaning
            “like cures like.” This principle suggests that a substance capable of
            producing a particular set of symptoms in a healthy individual may,
            when prepared in a highly diluted form, assist the body in responding
            to similar symptoms during illness.
          </p>

          <p>
            From a homeopathic perspective, symptoms are not viewed as isolated
            problems to be suppressed, but as meaningful expressions of the body’s
            attempt to restore internal balance. Fever, inflammation, fatigue, or
            emotional distress are interpreted as adaptive responses rather than
            purely pathological events.
          </p>

          <p>
            Homeopathic remedies are selected through a detailed process of
            individual assessment, taking into account not only physical complaints
            but also mental state, emotional tendencies, and sensitivity to
            environmental factors. This individualized approach distinguishes
            homeopathy from standardized treatment models.
          </p>

          <p>
            The preparation of remedies involves a process known as potentisation,
            which includes serial dilution and succussion. Traditional homeopathic
            theory holds that this process alters the qualitative action of the
            substance while reducing material concentration, allowing for gentle
            interaction with the body’s regulatory systems.
          </p>
        </div>

        {/* Diagram */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-14">
            <div className="flex-1 text-center">
              <p className="text-xl font-semibold">Substance</p>
              <p className="text-base text-gray-600 mt-2">
                Produces symptoms in a healthy individual
              </p>
            </div>

            <div className="text-green-700 text-3xl hidden md:block">→</div>
            <div className="text-green-700 text-3xl md:hidden">↓</div>

            <div className="flex-1 text-center">
              <p className="text-xl font-semibold">Potentisation</p>
              <p className="text-base text-gray-600 mt-2">
                Serial dilution and energetic preparation
              </p>
            </div>

            <div className="text-green-700 text-3xl hidden md:block">→</div>
            <div className="text-green-700 text-3xl md:hidden">↓</div>

            <div className="flex-1 text-center">
              <p className="text-xl font-semibold">Therapeutic Response</p>
              <p className="text-base text-gray-600 mt-2">
                Support of self-regulatory balance
              </p>
            </div>
          </div>

          <p className="mt-14 text-base text-gray-600 leading-relaxed">
            Through potentisation, homeopathy seeks to minimize direct chemical
            effects while emphasizing subtle regulatory influence, with the goal
            of encouraging the body’s natural capacity to adapt and restore
            equilibrium over time.
          </p>
        </div>
      </section>

      {/* ================= SECTION 3: HOW IT WORKS ================= */}
      <section className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-20 bg-[#f9faf9]">
        <h2 className="text-3xl font-semibold mb-10">
          How Homeopathy Supports Healing
        </h2>

        <div className="space-y-8 text-lg leading-relaxed text-gray-700">
          <p>
            Homeopathic practice centers on understanding the individual rather
            than treating disease categories alone. Two people experiencing similar
            clinical conditions may receive different remedies based on variations
            in symptom expression, emotional response, and personal constitution.
          </p>

          <p>
            Consultation in homeopathy often involves an in-depth discussion of
            physical sensations, mental outlook, stress patterns, sleep quality,
            digestion, and environmental reactions. This holistic evaluation aims
            to identify patterns that reflect the individual’s overall state of
            balance or imbalance.
          </p>

          <p>
            Remedies are traditionally prepared through repeated dilution and
            succussion, a process believed to modify the action of the original
            substance. While the material quantity decreases, homeopathic theory
            suggests that the informational or regulatory signal is preserved.
          </p>

          <p>
            Because of its gentle, non-invasive nature, homeopathy is frequently
            used as a complementary approach alongside conventional medical care,
            particularly in chronic or functional conditions where long-term
            regulation and lifestyle support are emphasized.
          </p>

          <p>
            Many individuals are drawn to homeopathy for its focus on long-term
            balance, personalized care, and respect for the body’s inherent
            capacity to adapt and self-regulate.
          </p>
        </div>
      </section>

      {/* ================= SECTION 4: CONDITIONS ================= */}
      <section className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-20">
        <h2 className="text-3xl font-semibold mb-8">
          Common Conditions Addressed with Homeopathy
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-16">
          Homeopathy is commonly used as a complementary or supportive approach
          for conditions that are recurrent, functional, or influenced by stress,
          lifestyle, and individual sensitivity. It does not replace emergency or
          specialized medical care, but may be integrated into broader wellness
          strategies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
          <div>
            <h3 className="text-lg font-medium mb-2">
              Allergies and respiratory sensitivities
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Seasonal allergies, sinus congestion, nasal irritation, and sensitivity
              to environmental triggers such as dust, pollen, or weather changes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">
              Digestive and gut-related concerns
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Functional digestive discomfort, bloating, acidity, irregular bowel
              habits, food sensitivities, and stress-related digestive imbalance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">
              Stress, anxiety, and sleep disturbances
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Mental fatigue, emotional strain, restlessness, disrupted sleep
              patterns, and stress-related physical symptoms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">
              Chronic skin conditions
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Persistent skin concerns such as eczema, acne, dryness, itching, or
              inflammatory flare-ups viewed as expressions of internal imbalance.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-2">
              Low immunity and recurrent illness
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Frequent infections, prolonged recovery periods, recurring colds,
              and reduced overall vitality, often addressed through constitutional
              support rather than symptom suppression alone.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="bg-[#f6f9f7] py-16">
        <div className="px-6 md:px-12 lg:px-20 xl:px-28">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            Homeopathy is a traditional system of medicine. For serious, acute,
            or long-standing health conditions, consultation with a qualified
            healthcare professional is essential. Always seek immediate medical
            attention in emergencies.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingEnquiryButton />
    </main>
  );
}