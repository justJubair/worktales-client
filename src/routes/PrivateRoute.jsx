import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types"
import loadingAnimation from "../assets/animations/loadingAnimation.json"
import Lottie from "lottie-react";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, isLoading} = useAuth()
    if (isLoading) {
        return (
          <div className="flex items-center justify-center h-screen">
            <Lottie className="w-96" animationData={loadingAnimation}></Lottie>
          </div>
        );
      }
    if(user?.email){
        return children
    } 
    return <Navigate state={{redirectPath: location?.pathname}} to="/login"/>

}

PrivateRoute.propTypes = {
    children:PropTypes.node
}
export default PrivateRoute;