import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebaseConfic';
export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    // sign up with email and password
    const SignupWithEmailandPassword = (email, password) => {
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

    // catch loged in user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const userLogout = () => {
        return signOut(auth);
    }

    const authInfo = {
        SignupWithEmailandPassword,
        updateUserProfile,
        signinByemailandPassword,
        userLogout,
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