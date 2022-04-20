import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div style={{height:"300px"}} className='w-100 d-flex justify-content-center align-items-center'>
            <h2>Welcome to Details {serviceId}</h2>
            <div className='text-center'>
            <Link to="/checkout"> <button className='bg-primary'> Proceed Check Out</button></Link>
            </div>
         
        </div>
    );
};

export default ServiceDetails;