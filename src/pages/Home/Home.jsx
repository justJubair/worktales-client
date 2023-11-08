import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import OurTestimonials from "../../components/OurTestimonials/OurTestimonials";

import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import BrowseCategory from "../../components/browseCategory/browseCategory";
const Home = () => {
    return(
        <div>
            <Navbar/>
            <Banner/>
            <BrowseCategory/>
            <OurTestimonials/>
            <WhyChooseUs/>
        </div>
    )}
export default Home;