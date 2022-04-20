import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});

    const [updateProfile, updating, updateError, displayName] = useUpdateProfile(auth);


    const navigete = useNavigate();

    const navigateLogin = event =>
        navigete('/login');

    if (user) {
        console.log(user);
    }
    if(loading || updating){
        return <Loading></Loading>
    }
    const submitRegister = async (event) => {
        event.preventDefault();
        const name = (event.target.name.value);
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        //const agree = event.target.terms.checked;

        // if (agree) {

        //     createUserWithEmailAndPassword(email, password);
        // }

          await createUserWithEmailAndPassword(email,password);
          await updateProfile({ displayName : name });
          console.log('Updated profile');
          navigete('/home');
        
    }



    return (

        <div className='register-form '>
            <h2 style={{ textAlign: "center" }}>Please Register</h2>

            <form onSubmit={submitRegister}>

                <input type="name" name="name" id="" placeholder='your Name' required /> <br />
                <input type="email" name="email" id="" placeholder='your Email' required /> <br />
                <input type="password" name="password" id="" placeholder='Password' required /> <br />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="" id="terms" />
                {/* <label className={agree ? 'text-primary ps-2' : 'text-danger ps-2'} htmlFor="terms">Accept Genius Car Terms & Condition</label> */}
                <label className={`ps-2 && ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms & Condition</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 d-block mx-auto mt-2'
                    type="submit"
                    value="Register" />

            </form>

            <p className='mt-2 pe-auto'>Already Have an account ? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;