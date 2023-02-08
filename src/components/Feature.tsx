const Feature = ({image, title, subtitle}:{image:any, title:String, subtitle:String}) => {
    return ( 
        <article className="flex flex-col items-center my-5 md:my-1">
            <img src={image} alt="" className="w-[100px]" />
            <h2 className="font-bold text-xl my-3 text-primarygreen">{title}</h2>
            <h4 className="w-[95%] text-primarygreen text-opacity-80">{subtitle}</h4>
            <h4 className="text-secondarygreen mt-3">Learn More</h4>
        </article>
     );
}
 
export default Feature;