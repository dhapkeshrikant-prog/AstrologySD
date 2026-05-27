type AboutCardProps = {
    img?: string;
    heading?: string;
    subheading?: string;
};

const AboutCard =({img="-", heading="-",subheading="-"}: AboutCardProps)=>{
    return(
    <div className ="flex">
        <div className ="flex h-16 mx-24 gap-1 justify-items-start w-100">
        <span className ="w-20 p-1">
            <img src={img} alt="Card img"/>
        </span>
        <span className ="text-white p-1 ">
            <h2 className=" text-2xl">{heading}</h2>
            <p>{subheading}</p>
        </span>
        </div>
    </div>
)}
export default AboutCard;
