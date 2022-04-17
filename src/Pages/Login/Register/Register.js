import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'

const Register = () => {
    

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      
    const navigete = useNavigate();

    const navigateLogin = event =>
    navigete('/login');
    if (user) {
        navigete('/home');
      }

    const submitRegister = event =>{
        event.preventDefault();
        const name = (event.target.name.value);
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        createUserWithEmailAndPassword(email,password);
        console.log(email, password, name);
    }

  

    return (
      
        <div className='register-form '>
             <h2 style={{textAlign:"center"}}>Please Register</h2>

             <form onSubmit={submitRegister}>
                 
                 <input type="name" name="name" id="" placeholder='your Name' required /> <br />
                 <input type="email" name="email" id="" placeholder='your Email'  required /> <br />
                 <input type="password" name="password" id=""  placeholder='Password' required /> <br />

                 <input type="submit" value="Register" />

             </form>
             <p className='mt-2 pe-auto'>Already Have an account ? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

          
        </div>
    );
};

export default Register;