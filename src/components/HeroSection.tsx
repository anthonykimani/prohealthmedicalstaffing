import doctors from "../assets/svg/doctors.svg";

const HeroSection = () => {
    return ( 
        <section className="font-kumbh flex flex-col md:flex-row justify-center items-center ">
            <article className="p-5 w-[100%] md:w-[40%]">
                <h1 className="text-5xl font-bold text-primarygreen">We Provide Dependable HealthCare Staffing</h1>
                <h2 className="text-primarygreen text-xl mt-10">The key to success is within us</h2>
                <button className="text-white bg-secondarygreen py-2 px-4 rounded-lg mt-5">Apply Now</button>
            </article>
            <img src={doctors} alt="" className="w-[95%] md:w-[50%] m-5 " />
        </section>
     );
}
 
export default HeroSection;