import React from 'react';

import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast , ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );


    console.log("inside required auth", user);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;

    }
    if (!user.emailVerified) {
        return <div>
            <h3 className='test-danger'>Your Email is not verified</h3>
            <h5 className='text-success'> Please Verify Your Email</h5>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification  email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>

    }

    return children;

};

export default RequireAuth;