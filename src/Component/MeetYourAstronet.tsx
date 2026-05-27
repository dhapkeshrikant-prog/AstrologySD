import CommonButton from "../CommonComponent/CommonButton";

const MeetYourAstronet = () => {
  return (
    <section id="meet-your-astronet" className="bg-[#07040b] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <p className="text-amber-300 text-xs uppercase tracking-[0.3em]">Meet Your Astrologer</p>
            <h2 className="text-2xl font-bold text-white">Meet Acharya Aniruddh</h2>
            <p className="text-sm text-amber-100">
              Acharrya Anirrudhra blends Vedic astrology, numerology, vastu and spiritual guidance to help you navigate career, relationships and life transitions.
            </p>

            <div className="space-y-2">
              <div className="rounded-lg bg-white/5 p-3 shadow-md">
                <h3 className="text-sm font-semibold text-white">10+ Years Experience</h3>
                <p className="text-xs mt-1 text-amber-200">Trusted guidance across astrology and wellness.</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3 shadow-md">
                <h3 className="text-sm font-semibold text-white">50K+ Happy Clients</h3>
                <p className="text-xs mt-1 text-amber-200">Life-changing consultations and intuitive planning.</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3 shadow-md">
                <h3 className="text-sm font-semibold text-white">Personalised Guidance</h3>
                <p className="text-xs mt-1 text-amber-200">Customised solutions for work, love, health and purpose.</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3 shadow-md">
                <h3 className="text-sm font-semibold text-white">Global Reach</h3>
                <p className="text-xs mt-1 text-amber-200">Serving clients from 25+ countries.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <CommonButton text="Book Consultation" href="#service" />
              <CommonButton text="Watch Introduction" href="#blog" tone="outline" />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 shadow-md h-full">
            <img
              src="https://images.unsplash.com/photo-1577720643272-265f434b5c67?auto=format&fit=crop&w=500&q=80"
              alt="Traditional Indian Astrologer"
              className="h-full w-full rounded-lg object-cover min-h-96"
            />
            <div className="absolute bottom-2 left-2 rounded-lg bg-black/70 p-2 text-white backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Vedic Expertise</p>
              <h3 className="text-xs font-semibold mt-1">Vedic Astrology · Vastu · Numerology</h3>
              <p className="text-xs mt-1 text-amber-200">Expert solutions for clarity and transformation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourAstronet;
