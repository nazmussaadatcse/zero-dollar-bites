import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const authInfo = {
        user,
        createUser,
        signIn,
        handleGoogleSignIn,
        logOut,
        loading,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            
            console.log('user', currentUser);
            setUser(currentUser);
            setLoading(false);
            // token 
            // if (currentUser) {
            //     axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
            //         .then(res => {
            //             console.log('token res:', res.data);
            //         })
            // }
            // else {
            //     axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
            //     .then(res=>{
            //         console.log(res.data);
            //     })
            // }
            
        });

        return () => {
            unSubscribe();
        }

    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;