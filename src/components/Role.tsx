const Role = ({ image,text}:{image:any, text:String}) => {
    return ( 
        <article className="bg-white p-2 m-2 rounded-lg text-primarygreen w-[95%] md:w-[28%] ">
            <img src={image} alt="" className="w-[100%]" />
            <div className="flex justify-between items-center ">
            <h3 className="font-bold w-[50%] ">{text}</h3>
            <button className="rounded-sm border border-primarygreen bg-transparent px-4 py-1 my-2">Apply Now</button>
            </div>
        </article>
     );
}
 
export default Role;