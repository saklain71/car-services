import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';


const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            console.log(email);
            const url = `https://guarded-retreat-61 
            183.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error) { 
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login');
                } 
            }
        }
        getOrders();

    }, [user])

    return (
        <div className='w-50 mx-auto'>
            <h2>Your orders length : {orders.length}</h2>

            {
                orders.map(orders => <li key={orders._id}>
                    <p>{orders.email} : {orders.service}</p>
                </li>)
            }
        </div>
    );
};

export default Order;