import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import HomeAbout from "../components/HomeAbout";
import Navbar from "../components/Navbar";
import RoleSection from "../components/RoleSection";
import Subscribe from "../components/Subscribe";

const Home = () => {
    return ( 
        <section className="bg-lightgreen">
            <Navbar />
            <HeroSection />
            <RoleSection />
            <Features />
            <HomeAbout />
            <Subscribe />
        </section>
     );
}
 
export default Home;