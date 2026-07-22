"use client";

export default function Support() {
  const data = [
    {
      icon: "🌿",
      title: "Consultations",
      desc: "Personal one-on-one consultations where our practitioners understand your lifestyle, symptoms, & health concerns to identify root causes.",
    },
    {
      icon: "📋",
      title: "Personalized Plans",
      desc: "Individually crafted wellness plans combining naturopathy, homoeopathy, & nutrition, designed to support your body, goals, & well-being.",
    },
    {
      icon: "💊",
      title: "Symptom Relief",
      desc: "Natural and gentle treatments focused on relieving symptoms safely while supporting your body’s natural ability to heal and restore balance.",
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      desc: "Continuous guidance, regular follow-ups, and plan adjustments to ensure steady progress, clarity, and confidence throughout your healing process.",
    },
  ];

  return (
    <section className="bg-white px-4 py-12">
      <h2 className="px-20 text-center text-3xl font-semibold text-green-800 lg:text-4xl">
        How We Support Your Healing
      </h2>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-5 px-5 md:grid md:grid-cols-2 md:px-8 lg:px-12">
        {data.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-xl bg-green-50 p-5 shadow-sm"
          >
            <div className="text-4xl">{item.icon}</div>

            <div>
              <h3 className="text-2xl font-semibold text-green-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-green-800 lg:text-lg">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 px-20 text-center text-md italic text-green-900 lg:text-2xl">
        &ldquo;Asking for help isn&apos;t a sign of weakness, it&apos;s an act of
        strength.&rdquo;
      </p>
    </section>
  );
}