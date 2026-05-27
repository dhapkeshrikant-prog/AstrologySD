type CommonBottomProps = {
    htext?: string;
    ptext?: string;
    className?: string;
};

const CommonBottom =({htext="10+",ptext="Year Experiance", className=""}: CommonBottomProps)=>{
    return(

        <div className={`m-12 h-30 w-30 pt-6 px-20 text-white ${className}`}>
            <div>
            <h2 className="text-5xl font-bold">{htext}</h2>
            <p className="text-1xl">{ptext}</p>
            </div>
           
        </div>
    )
}
export default CommonBottom;
