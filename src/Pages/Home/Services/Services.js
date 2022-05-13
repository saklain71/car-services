import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://guarded-retreat-61183.herokuapp.com/service')
            .then(res => res.json())
            .then(data =>
                setServices(data))

    }, [])
    return (
        <div id="services" className='container'>
            <h1 className='text-primary text-center m-5'>Our Services</h1>
            <div className="services-container">

                {
                    services.map(services =>
                        <Service
                            key={services._id}
                            services={services}
                        ></Service>
                    )

                }
            </div>
        </div>
    );
};

export default Services;