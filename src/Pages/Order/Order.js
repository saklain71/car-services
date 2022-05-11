import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useAuthState(auth);
    
    useEffect(()=>{
        
        const getOrders = async() =>{
            const email = user?.email;
            console.log(email);
            const url = `http://localhost:5000/order?email=${email}`;

            const {data} = await axios.get(url , {
                headers : {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                } 
            });
            setOrders(data);
        }
        getOrders();
    },[user])

    return (
        <div>
            <h2>Your orders length : {orders.length}</h2>
        </div>
    );
};

export default Order;