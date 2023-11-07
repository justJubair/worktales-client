import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import auth from "../config/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    // Create new users
    const signUp = (email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login existing users
    const login =(email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout existing user
    const logOut = ()=>{
        setIsLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setIsLoading(false)
            return ()=>{
                unsubscribe()
            }
        })
    },[])
    
    const authInfo = {
        signUp,
        login,
        logOut,
        user,
        isLoading
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