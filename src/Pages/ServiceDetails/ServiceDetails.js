
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hook/useServiceDetail';

const ServiceDetails = () => {
    const {serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div style={{height:"300px"}} className='w-100 d-flex justify-content-center align-items-center'>
           
            <h2>Welcome to Details {serviceId} </h2>
            <p>destructuring - {service.name}</p>
           
            <div className='text-center'>
            <Link to={`/checkout/${serviceId}`}> <button className='bg-primary'> Proceed Check Out</button></Link>
            </div>
         
        </div>
    );
};

export default ServiceDetails;