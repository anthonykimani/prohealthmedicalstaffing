import Features from "../components/Features";
import Footer from "../components/Footer";
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
            <Footer />
        </section>
     );
}
 
export default Home;