import CommonButton from "../CommonComponent/CommonButton";

const Navbar =()=>{
    return(
        <div className="bg-amber-100 text-2xl font cursor-pointer flex justify-between flex-wrap gap-6 w-full">
          <div id="logo" className ="flex">
            <img src="https://i.pinimg.com/736x/f0/5e/5d/f05e5d655bdab07e852630920209afe7.jpg" className="p-1 h-15 max-w-20 rounded-full cursor-pointer" alt="logo"/>
            <span className="p-2 mx-0 text-amber-800">AstoNest</span>
          </div>
          <div className="flex gap-10 p-3 text-1xl ">
           <a href="#home">Home</a>
           <a href="#tool">Tools</a>
           <a href="#about">About</a>
           <a href="#blog">Blog</a>
           <a href="#shop">Shop</a>
           <a href="#success-stories">Success Stories</a>
           </div>
           <div>
           <CommonButton text="Book Consultation"/>
           </div>
        </div>
    )
}
export default Navbar;