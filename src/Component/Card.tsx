import CommonButton from "../CommonComponent/CommonButton";

type CardProps = {
    heading?: string;
    img?: string;
    context?: string;
};

const Card=({heading="-",img="",context="-"}: CardProps)=>{
    return(
        <div className="h-110  mx-6 w-80  bg-mauve-500">
            {/* Card Image */}
         <div>   
         <img className="h-60  bg-cyan-400"src={img} alt="Card Img" />
         </div>
         {/* Card Contats */}
         <div className ="flex flex-col gap-1">
            {/* Card Heading */}
            <h2 className="text-center font-medium" >{heading}</h2> 
            <p className ="px-5 text-1xl">{context}</p>
         </div>
         {/* button */}
         <div className="flex justify-center">
          <CommonButton text="Try-Now >" /> 
          </div>      
        </div>
    )

}
export default Card;
