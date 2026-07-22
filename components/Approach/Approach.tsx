export default function Approach() {
  return (
    <section className="relative bg-[#e3f0dc] py-14 px-6 sm:px-10 lg:px-24 mt-10">
      
      {/* subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6faf4] to-[#e3f0dc] -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-5">
          <p className="text-sm tracking-widest uppercase text-[#6b8f71] mb-6">
            Our Health Care Approach
          </p>

          <h2 className="text-4xl sm:text-5xl font-light text-[#1f3b2c] leading-tight">
            You are <span className="font-medium">unique</span>
          </h2>

          <p className="mt-8 text-lg text-[#3b4f44] leading-relaxed text-center">
            Healing begins when your individuality is respected, understood,
            & supported through personalised care.
 


              
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e1ebe3]">
            <p className="text-[#1d442d] text-lg leading-relaxed">
              Our health care approach considers your unique expressions of
              health and when you feel unwell, supports the creation of a tailor-made plan.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e1ebe3]">
            <p className="text-[#1d442d] text-lg leading-relaxed">
              We endeavour to understand your health concerns and the impact
              they have on your total wellbeing, not just isolated symptoms.
            </p>
          </div>
        </div>

        {/* Closing reflection */}
        <div className="mt-8 max-w-5xl mx-auto text-center">
          <p className=" text-[#3f4f46] text-lg leading-relaxed sm:text-center text-left p-5">
            Your state of health reflects ancestral inherited traits,
            personality, lifestyle, nutrition, and the life events you
            experience. These influences shape how your body expresses balance
            or imbalance.
            
            We explore these aspects with you across physical, mental, and
            emotional planes, going deeper to understand underlying causes.
            Where appropriate, supportive testing may be used to provide further
            insight and clarity.
          </p>
        </div>

      </div>
    </section>
  );
}
