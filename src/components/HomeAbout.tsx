import patientcare from "../assets/svg/patientcare.svg";

const HomeAbout = () => {
    return ( 
        <section className="bg-white flex flex-col md:flex-row justify-around items-center m-2 md:m-5 ">
            <img src={patientcare} alt="" className="w-[95%] md:w-[50%]" />
            <article className="flex flex-col justify-around text-center font-kumbh w-[95%] md:w-[50%] m-2 md:m-5 md:h-[300px] ">
                <h2 className="font-bold text-primarygreen text-2xl ">Our Commitment</h2>
                <h4 className="text-base text-primarygreen">For nearly 2 years, Prohealth Medical Staffing has partnered with healthcare providers by sourcing medical talent across multiple disciplines to support their medical staffing and recruitment needs. Today, our clinicians provide services across the state of Oregon.</h4>
                <h5 className="text-secondarygreen">Learn More</h5>
            </article>
        </section>
     );
}
 
export default HomeAbout;