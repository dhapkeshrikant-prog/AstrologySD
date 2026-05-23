import CommonButton from "../CommonComponent/CommonButton";
const Card=({heading="-",img="",context="-"})=>{
    return(
        <div className="h-100 mx-8 w-75 bg-amber-200">
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
          ,</div>      
        </div>
    )

}
export default Card;