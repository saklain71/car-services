
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId } = useParams();
    const [service, setService] = useState({});
    console.log(service);

    useEffect (()=>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res =>  res.json())
        .then(data => setService(data))
    },[])

 

    return (
        <div style={{height:"300px"}} className='w-100 d-flex justify-content-center align-items-center'>
           
            <h2>Welcome to Details {serviceId} </h2>
            <p>destructuring - {service.name}</p>
           
            <div className='text-center'>
            <Link to="/checkout"> <button className='bg-primary'> Proceed Check Out</button></Link>
            </div>
         
        </div>
    );
};

export default ServiceDetails;