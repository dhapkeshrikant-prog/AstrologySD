import CommonButton from "../CommonComponent/CommonButton";
import Card from "./Card";
const Tools = ()=>{
    return(
        <div>
            <div className ="flex flex-col justify-center font-normal text-white items-center p-5">
                <h1 className="font-bold md:text-4xl">Free Astrology Tools</h1>
                <p className="font text-2xl ">Explore Powerful tools for free</p>
            </div>
            <div className ="Card-Container flex gap-5">
                {/* Card1 */}
                 <Card  img="https://plus.unsplash.com/premium_photo-1700740342767-9ca82d2c6eb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHpvZGlhYyUyMHdoZWVsfGVufDB8fDB8fHww" heading="Daily Horoscope" context="Know how your daily astrology details"/>
                 {/* Card 2 */}
                 <Card  img="https://plus.unsplash.com/premium_photo-1699967437640-17ec76db90d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg0fHx8ZW58MHx8fHx8" heading="Daily Horoscope" context="Know how your daily astrology details"/>
                 {/* Card 3 */}
                 <Card  img="https://media.istockphoto.com/id/1334201620/vector/astrology-and-numerology-concept-with-zodiac-signs-and-numbers-over-starry-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=26OSkDvAAbrr8urVBppsxysRjI9gc5zWRmc_oTvRtto=" heading="Daily Horoscope" context="Know how your daily astrology details"/>
                 {/* Card 4 */}
                 <Card  img="https://plus.unsplash.com/premium_photo-1700740342767-9ca82d2c6eb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHpvZGlhYyUyMHdoZWVsfGVufDB8fDB8fHww" heading="Daily Horoscope" context="Know how your daily astrology details"/>
            </div>
            <div className="flex justify-center mt-14 ">
                <CommonButton text="Explore All Tools"/>
            </div>

        
        </div>
        
    )
}
export default Tools;