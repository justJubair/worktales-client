import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types"

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, isLoading} = useAuth()
    if (isLoading) {
        return (
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-bars loading-lg"></span>
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