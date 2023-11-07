import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
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
        </div>
    )}
export default Root;  