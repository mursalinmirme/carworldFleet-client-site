import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebaseConfic';
export const authContext = createContext(null);
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    console.log(auth);
    const authInfo = {name:'name'};
    return (
        <authContext.Provider value={authInfo}>
             {children}
        </authContext.Provider>
    );
};

export default AuthProvider;