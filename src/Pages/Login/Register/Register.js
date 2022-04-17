import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigete = useNavigate();
    const navigateLogin = event =>
    navigete('/login');

    const submitRegister = event =>{
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        console.log(email, password);
    }
    return (
      
        <div className='register-form '>
             <h2 style={{textAlign:"center"}}>Please Register</h2>

             <form onSubmit={submitRegister}>
                 
                 <input type="name" name="name" id="" placeholder='your Name' /> <br />
                 <input type="email" name="email" id="" placeholder='your Email' /> <br />
                 <input type="password" name="password" id=""  placeholder='Password'/> <br />
                 <input type="submit" value="Register" />

             </form>
             <p className='mt-2 pe-auto'>Already Have an account ? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

          
        </div>
    );
};

export default Register;