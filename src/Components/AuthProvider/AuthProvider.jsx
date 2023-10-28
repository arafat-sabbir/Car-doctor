import { createContext, useEffect, useState } from "react";
import app from "../../FirebaseConfig/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Context = createContext(null)
const googleAuthProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)
    const auth = getAuth(app)
    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    } 
    const signInUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    } 
    const googleSignIn =()=>{
        setLoader(true)
        return signInWithPopup(auth,googleAuthProvider)
    }
    const logOutUser = ()=>{
        setLoader(true)
       return signOut(auth)

    }
    const contextValue = {
        createUser,
        signInUser,
        googleSignIn,
        user,
        loader,
        logOutUser
    }
    useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoader(false)
        })
        return()=>{
            unsubsCribe();
        }
    },[auth])
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;