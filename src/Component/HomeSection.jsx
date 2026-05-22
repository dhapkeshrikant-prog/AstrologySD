import CommonButton from "../CommonComponent/CommonButton";

const HomeSection = () => {
  return (
    <div>
      <section
        id="home"
        className=" min-h-screen flex flex-col justify-between px-30 py-15"
      >
        <div className="flex flex-col gap-5 ">
          {/* Heading  */}
          <div>
            <h1 className=" text-black text-4xl md:text-5xl leading-none font">
              Align Your Stars.<br></br>Align Your Life
            </h1>
          </div>
          {/* Sub Heading */}
          <div className="font text-1xl md:text-2xl leading- ">
            <h2>
              Personalised Astrology, Vastu & <br></br> Numerology Guidance by
              ........
            </h2>
          </div>
          {/* feature */}
          <div className="text-xl md:text-1xl">
            <h3> Ancient Wisdom</h3>
            <h3> Modern Approach</h3>
            <h3> Personalised Guidance</h3>
          </div>
          {/* buttons */}
          <div className="flex gap-2">
            <CommonButton text="Explore Astronet" />
            <CommonButton text=">Watch Indroduction" />
          </div>
        </div>
        {/* Bottom Card */}
        <div className=" flex gap-8 mt-10 mx-20 ">
          <div className="text-2xl font-bold  bg-amber-300">
            <h2>10+</h2>
            <p className="text=1xl">
              Year Experiance
            </p>
          </div>

          <div className="text-3xl font-bold  bg-amber-300">
            <h2>50k+</h2>
            <p className="text-1xl  ">Client</p>
          </div>

          <div className="text-3xl font-bold  bg-amber-300">
            <h2>98%</h2>
            <p className="text-1xl  ">Positive Feedback</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeSection;
