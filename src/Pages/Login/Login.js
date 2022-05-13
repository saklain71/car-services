import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    if (user) {
        //  navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error : {error?.message} </p>
        </div>
    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const {data}  = await axios.post('https://guarded-retreat-61183.herokuapp.com/login', {email});
        localStorage.setItem('accessToken', data.accessToken);
        // console.log(data);
        navigate(from, { replace: true });

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else {
            toast("Enter your email");
        }

    }
    const navigateRegister = event => {
        navigate('/register');
    }

    return (

        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center '>Please login</h2>
            <PageTitle title="Login"></PageTitle>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary w-50 d-block mx-auto " type="submit">
                    Login
                </Button>

                <p className='mt-2 pe-auto'>New to Genius Car ? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister} >Please Register</Link></p>
                <p className='mt-2 pe-auto'>Forget Password ? <button className='btn btn-primary pe-auto text-decoration-none' onClick={resetPassword} >Reset Password</button></p>
            </Form>
            {errorElement}
            <SocialLogin></SocialLogin>


        </div>
    );
};

export default Login;