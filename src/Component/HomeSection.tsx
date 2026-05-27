import CommonBottom from "../CommonComponent/CommonBottom";
import CommonButton from "../CommonComponent/CommonButton";
import homeBg from "../assets/Home.png";

const features = ["Ancient Wisdom", "Modern Approach", "Personalised Guidance"];

const HomeSection = () => {
  return (
    <div>
      <section
        id="home"
        className="flex min-h-screen flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="flex max-w-3xl flex-col gap-3 px-30">
          <div className ="flex flex-col">
              <h1 className="text-amber-300 font text-5xl leading-none md:text-6xl">Align Your Stars.</h1>
              <br />
              <h1 className="text-white font text-5xl leading-none md:text-6xl">
              Align Your Life
               </h1>
          </div>

          <div className="font text-1xl md:text-1xl">
            <h2>
              Personalised Astrology, Vastu  <br/> Numerology Guidance by
              ........
            </h2>
          </div>

          <div className="flex flex-col gap-2 text-amber-50">
            {features.map((feature) => (
              <h3
                key={feature}
                className="flex items-center gap-3 text-base font-normal md:text-lg"
              >
                <span className="flex size-5 items-center justify-center rounded-full border border-amber-400/70 bg-amber-500/15 text-[11px] font-bold text-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.35)]">
                  {"\u2713"}
                </span>
                <span className="text-amber-50/90">{feature}</span>
              </h3>
            ))}
          </div>

          <div className="flex gap-2">
            <CommonButton text="Explore Astronet" />
            <CommonButton text=">Watch Indroduction" />
          </div>
        </div>

        <div className="flex">
          <CommonBottom />
          <CommonBottom htext="50K" ptext="Happy Client" />
          <CommonBottom htext="100K" ptext="Consultant" />
          <CommonBottom htext="25+" ptext="Country" />
          <CommonBottom htext="4.9" ptext="Average Rating" />
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
