import CommonBottom from "../CommonComponent/CommonBottom";
import CommonButton from "../CommonComponent/CommonButton";
const HomeSection = () => {
  return (
    <div>
      <section
        id="home"
        className=" bg-cover bg-right bg-no-repeat min-h-screen flex flex-col justify-center  
          bg-[url('https://plus.unsplash.com/premium_photo-1701068457053-d21ad8f94a1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" >
       
        <div className="flex flex-col max-w-3xl gap-3 px-30 ">
          {/* Heading  */}
          <div>
            <h1 className=" text-white text-6xl md:text-5xl leading-none font">
              Align Your Stars.<br></br>Align Your Life
            </h1>
          </div>
          {/* Sub Heading */}
          <div className="font text-white text-1xl md:text-1xl ">
            <h2>
              Personalised Astrology, Vastu & <br></br> Numerology Guidance by
              ........
            </h2>
          </div>
          {/* feature */}
          <div className="text-1xl text-white md:text-1xl">
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
        <div className="flex" >
        <CommonBottom/>
        <CommonBottom htext="50K" ptext="Happy Client"/>
        <CommonBottom htext="100K" ptext="Consultant"/>
        <CommonBottom htext="25+" ptext="Country"/>
        <CommonBottom htext="4.9" ptext="Average Rating"/>
        </div>
      </section>
    </div>
  );
};
export default HomeSection;
