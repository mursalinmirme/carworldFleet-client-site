import React, { useContext } from 'react';
import { authContext } from '../authProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import carGif from '../assets/carGif.gif';
const Authentication = ({children}) => {
    const {user, loading} = useContext(authContext);
    if(loading){
        return <div className='flex justify-center items-center min-h-[500px]'><img className='filter grayscale blur-none contrast-100 w-52' src={carGif} alt="" /></div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/signin'}></Navigate>
};

export default Authentication;