import AboutCard from "../CommonComponent/AboutCard";
import CommonBottom from "../CommonComponent/CommonBottom";
import Navbar from "./Navbar";
const About = () => {
  return (
    <section id="about" className="bg-center bg-fit bg-no-repeat bg-amber-950 h-screen bg-[url('')]">
        <div>
          <Navbar></Navbar>
        </div>
      {/*Heading*/}
      <div className ="flex justify-center flex-col items-center ">
        <h1 className=" p-3 text-amber-300 font-normal text-4xl ">
          About AstoNest
        </h1>
        {/* Sub heading */}
        <p className="font-normal text-white">Your Path to Clarity Peace, & Prosperity</p>
        <p className="p-5 text-normal text-center text-1.5xl text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ,tenetur excepturi elit. Deserunt ,tenetur excepturi elit. Deserunt ,tenetur excepturi ,<br></br> sunt similique earum nisi. N</p>
      </div>
    <div className="flex gap-3 flex-col">
        <AboutCard  img="https://media.istockphoto.com/id/2208471294/photo/zodiac-signs-and-astrology-wheel.webp?a=1&b=1&s=612x612&w=0&k=20&c=a2pFvW2R3lfaPKw6pJ9BpeLowYMHE6uAW9V4nKJc2iY=" heading="Vedic Astrology" subheading="Astrology define on birth date and day"/> 
        <AboutCard  img="https://media.istockphoto.com/id/2208471294/photo/zodiac-signs-and-astrology-wheel.webp?a=1&b=1&s=612x612&w=0&k=20&c=a2pFvW2R3lfaPKw6pJ9BpeLowYMHE6uAW9V4nKJc2iY=" heading="Vedic Astrology" subheading="Astrology define on birth date and day"/> 
        <AboutCard  img="https://media.istockphoto.com/id/2208471294/photo/zodiac-signs-and-astrology-wheel.webp?a=1&b=1&s=612x612&w=0&k=20&c=a2pFvW2R3lfaPKw6pJ9BpeLowYMHE6uAW9V4nKJc2iY=" heading="Vedic Astrology" subheading="Astrology define on birth date and day"/> 
        <AboutCard  img="https://media.istockphoto.com/id/2208471294/photo/zodiac-signs-and-astrology-wheel.webp?a=1&b=1&s=612x612&w=0&k=20&c=a2pFvW2R3lfaPKw6pJ9BpeLowYMHE6uAW9V4nKJc2iY=" heading="Vedic Astrology" subheading="Astrology define on birth date and day"/> 
    </div>
    <div className="flex" >
        <CommonBottom/>
        <CommonBottom htext="50K" ptext="Happy Client"/>
        <CommonBottom htext="100K" ptext="Consultant"/>
        <CommonBottom htext="25+" ptext="Country"/>
        <CommonBottom htext="4.9" ptext="Average Rating"/>
        </div>
    </section>
  );
};
export default About;
