import React from 'react';
import './Service.css'
const Service = ({services}) => {
    const  {name, img, description, price} = services;
    return (
        
        <div className='service' >
            <img className='w-100' src={img} alt="" />
            <h2> {name}</h2>
            <p>price: {price}</p>
            <p><small>{description}</small></p>
            <button>Book: {name} </button>
        </div>
    );
};

export default Service;