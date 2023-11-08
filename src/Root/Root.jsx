import { useEffect } from "react";
import { Outlet, useLocation} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    const location = useLocation()
    useEffect(()=>{
        if(location.pathname === "/"){
            document.title = "Worktales"
        } else {
            document.title = `Worktales ${location.pathname.replace("/", "-")}`
        }
        if(location.state?.title){
            document.title = location.state?.title
        }
    },[location.pathname, location.state])
    return(
        
        <div>
        
           <Outlet/>
           <Footer/>
        </div>
    )}
export default Root;  