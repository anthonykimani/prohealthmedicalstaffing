import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import HomeAbout from "../components/HomeAbout";
import Navbar from "../components/Navbar";
import RoleSection from "../components/RoleSection";

const Home = () => {
    return ( 
        <section className="bg-lightgreen">
            <Navbar />
            <HeroSection />
            <RoleSection />
            <Features />
            <HomeAbout />
        </section>
     );
}
 
export default Home;