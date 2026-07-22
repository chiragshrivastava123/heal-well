import Image from "next/image";
import Footer from "@/components/footer/Footer";
import FloatingEnquiryButton from "@/components/floatingEnqBtn/FloatingEnqBtn";

export default function Naturopathy() {
  return (
    <article className="w-full bg-white">
      {/* Hero Section */}
      
<section className="max-w-7xl mx-auto px-6 pt-[160px] pb-3"> 
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Text */}
    <div>
      <p className="text-sm uppercase tracking-wide text-green-700 mb-3">
        Holistic Natural Care
      </p>

      <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
        Naturopathy: Healing the Whole Person
      </h1>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        Naturopathy focuses on restoring health by understanding the whole
        person, not just symptoms. It supports the body’s natural ability
        to heal through lifestyle, nutrition, and gentle natural
        therapies. It’s about finding balance and long-term wellness, empowering you to take an active role in your health journey.
      </p>
    </div>

    {/* Image */}
    <div className="relative w-full h-[220px] lg:h-[400px] rounded-2xl overflow-hidden">
      <Image
        src="/Blog_Naturopathy.png"
        alt="Naturopathy consultation"
        fill
        className="object-cover"
        priority
      />
    </div>

  </div>
</section>


      {/* intro Holistic Approach */}      
    <section className="max-w-7xl mx-auto px-6 py-16 bg-green-50/60 rounded-2xl">
  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
    A Holistic Approach to Health & Healing
  </h2>

  <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
    <p>
      Naturopathy is founded on the understanding that true health cannot be
      achieved by treating symptoms alone. Instead, it focuses on the complete
      picture of a person’s wellbeing, recognising the close connection between
      physical health, mental state, emotional balance, and daily lifestyle.
    </p>

    <p>
      This holistic approach allows naturopathy to look beyond immediate health
      concerns and explore underlying patterns that may be contributing to
      imbalance. Factors such as nutrition, stress levels, sleep quality,
      emotional wellbeing, and environmental influences are all carefully
      considered as part of this process.
    </p>

    <p>
      By taking the time to understand how these elements interact,
      naturopathy supports the body’s natural ability to restore balance and
      function more effectively. Care is tailored to the individual,
      acknowledging that health journeys are unique and require personalised
      support rather than one-size-fits-all solutions.
    </p>

    <p>
      The goal of naturopathy is not only to support recovery, but also to help
      individuals build a stronger foundation for long-term health, resilience,
      and overall wellbeing.
    </p>
  </div>
</section>
      {/* Core Principles */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-gray-900 mb-12">
            Core Principles of Naturopathy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Whole-Person Care",
                text: "Physical, mental, emotional, and lifestyle factors are considered together to support complete wellbeing.",
              },
              {
                title: "Nutrition & Lifestyle Focus",
                text: "Diet, daily habits, sleep, and activity levels play a key role in restoring and maintaining health.",
              },
              {
                title: "Stress & Balance",
                text: "Managing stress and emotional wellbeing is essential for achieving internal balance.",
              },
              {
                title: "Patient Empowerment",
                text: "You are encouraged to be actively involved in your own healing journey.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Helps */}
    {/* How It Helps */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
    How Naturopathy Supports Long-Term Wellness
  </h2>

  <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
    <p>
      Naturopathy supports long-term wellness by looking beyond isolated
      symptoms and understanding the complete picture of an individual’s
      health. Factors such as daily habits, emotional wellbeing, nutrition,
      sleep patterns, and stress levels are all considered as interconnected
      influences on the body.
    </p>

    <p>
      Rather than offering short-term relief alone, naturopathic care works
      to strengthen the body’s own healing capacity. By restoring balance
      and addressing underlying causes, the body is guided toward a more
      stable and resilient state of health over time.
    </p>

    <p>
      This approach encourages individuals to actively participate in their
      wellbeing. Small, consistent changes in lifestyle and self-care
      gradually build a strong foundation that supports health not just
      today, but for years to come.
    </p>

    <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 list-disc list-inside">
      <li>Identifying root causes of physical and emotional imbalance</li>
      <li>Supporting the body’s natural detoxification and repair processes</li>
      <li>Improving energy levels and stress resilience</li>
      <li>Encouraging sustainable nutrition and daily habits</li>
      <li>Reducing dependence on temporary symptom-based solutions</li>
      <li>Promoting lasting wellbeing through preventive care</li>
    </ul>
  </div>
</section>

      {/* Conditions Supported */}
      <section className="bg-green-50 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-serif text-gray-900 mb-12">
      Conditions Naturopathy May Support
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Diabetes Support
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Naturopathy focuses on lifestyle, nutrition, and stress management
          strategies that may help support blood sugar balance and overall
          metabolic health.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Thyroid-Related Concerns
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          By addressing nutritional deficiencies, stress levels, and lifestyle
          factors, naturopathy may help support healthy thyroid function and
          hormonal balance.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Stress & Anxiety Support
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Naturopathy recognises the strong connection between stress and
          physical health, offering supportive strategies to promote emotional
          balance and resilience.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Pre & Post-Natal Care
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Gentle, individualised naturopathic support may assist women during
          pregnancy and post-natal stages by supporting nutritional needs,
          energy levels, and overall wellbeing.
        </p>
      </div>

    </div>

    <p className="text-base text-gray-600 mt-12 max-w-5xl">
      Naturopathy supports overall wellness and is intended to work alongside
      conventional medical care when appropriate, with treatment tailored to
      individual needs.
    </p>
  </div>
</section>

      {/* Closing */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">
          Your Health, Your Journey
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Naturopathy empowers you with knowledge, awareness, and tools to take
          an active role in your health and wellbeing, supporting balance and
          long-term vitality.
        </p>
      </section>

      <Footer />
      <FloatingEnquiryButton />
    </article>
  );
}