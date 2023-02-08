import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import RoleSection from "../components/RoleSection";

const Home = () => {
    return ( 
        <section className="bg-lightgreen">
            <Navbar />
            <HeroSection />
            <RoleSection />
        </section>
     );
}
 
export default Home;