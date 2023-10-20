import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebaseConfic';
export const authContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    // sign up with email and password
    const SignupWithEmailandPassword = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // update profile
    const updateUserProfile = (updateObj) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateObj);
    }

    // user sign in by email and password
    const signinByemailandPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signInwithGoogle
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // catch loged in user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setUser(user);
        })
        return () => unSubscribe();
    }, [SignupWithEmailandPassword])

    const userLogout = () => {
        return signOut(auth);
    }

    const authInfo = {
        SignupWithEmailandPassword,
        updateUserProfile,
        signinByemailandPassword,
        userLogout,
        googleLogin,
        user,
        loading,
    };
    return (
        <authContext.Provider value={authInfo}>
             {children}
        </authContext.Provider>
    );
};

export default AuthProvider;