import CommonButton from "../CommonComponent/CommonButton";

const Navbar =()=>{
    return(
        <div className="bg-blue-500 text-3xl font cursor-pointer flex justify-between flex-wrap gap-6 w-full">
          <div id="logo">
            <img className="" alt="logo"/>
            <span className="mx-30 ">AstoNext</span>
          </div>
          <div className="flex gap-10 p-2 text-xl ">
           <a href="#home">Home</a>
           <a href="#tool">Tool</a>
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