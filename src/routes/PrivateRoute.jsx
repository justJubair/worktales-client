import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types"

const PrivateRoute = ({children}) => {
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
    return <Navigate to="/login"/>

}

PrivateRoute.propTypes = {
    children:PropTypes.node
}
export default PrivateRoute;