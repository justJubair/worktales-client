import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import BrowseCategory from "../../components/browseCategory/browseCategory";
const Home = () => {
    return(
        <div>
            <Navbar/>
            <Banner/>
            <BrowseCategory/>
            <WhyChooseUs/>
        </div>
    )}
export default Home;