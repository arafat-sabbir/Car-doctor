import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import AboutUs from "./About/AboutUs";
import Services from "./Service/Services";
import Support from "./Support/Support";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";
import Whyus from "./WhyUs/Whyus";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Support></Support>
            <Team></Team>
            <Whyus></Whyus>
            <Testimonial></Testimonial>    
        </div>
        <div className='bg-black'>
        <Footer></Footer>
        </div>
        </div>

    );
};

export default Home;