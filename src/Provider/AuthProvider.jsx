import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import auth from "../config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxios from "../hooks/useAxios";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const axios = useAxios()
    // Create new users
    const signUp = (email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with google
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
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
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
            console.log(currentUser)
            if(currentUser){
                axios.post("/jwt", loggedUser)
                .then(res=>{
                    console.log(res.data)
                })
                .catch(error=>{
                    console.log(error)
                })
            } else{
                axios.post("/logout", loggedUser)
                .then(result =>{
                    console.log(result.data)
                })
                .catch(error=>{
                    console.error(error)
                })
            }
            return ()=>{
                unsubscribe()
            }
        })
    },[axios, user?.email])
    
    const authInfo = {
        signUp,
        login,
        loginWithGoogle,
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