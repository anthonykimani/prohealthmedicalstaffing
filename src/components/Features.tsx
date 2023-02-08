import { featureSource } from "../helpers/featureSource";
import Feature from "./Feature";

const Features = () => {
    return ( 
        <section className="flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-primarygreen my-5">Are looking for new and exciting job opportunities.</h2>
            <h4 className="text-lg md:text-xl w-[95%] md:w-[70%]">By registering with us, you'll have access to a wide range of temporary, contract, and permanent positions at healthcare facilities all across the country.</h4>
            <div className="flex flex-col md:flex-row justify-around items-center my-10">{featureSource.map(element=>{
                return ( <Feature key={element.id} image={element.image} title={element.title} subtitle={element.subtitle} />)
            })}</div>
        </section>
     );
}
 
export default Features;