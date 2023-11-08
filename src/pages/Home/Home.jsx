import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import OutTestimonials from "../../components/OurTestimonials/OutTestimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import BrowseCategory from "../../components/browseCategory/browseCategory";
const Home = () => {
    return(
        <div>
            <Navbar/>
            <Banner/>
            <BrowseCategory/>
            <OutTestimonials/>
            <WhyChooseUs/>
        </div>
    )}
export default Home;