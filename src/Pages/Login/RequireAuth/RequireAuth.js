import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    console.log("inside required auth" , user);
   if(loading){
       return <Loading></Loading>
   }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
        
    }
  
    return children;
   
};

export default RequireAuth;