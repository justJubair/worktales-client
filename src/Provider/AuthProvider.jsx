import { createContext } from "react";
import PropTypes from "prop-types"
import auth from "../config/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    // Create new users
    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login existing users
    const login =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        signUp,
        login,
    }
    return(
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    )}

AuthProvider.propTypes = {
    children:PropTypes.node
}    
export default AuthProvider;