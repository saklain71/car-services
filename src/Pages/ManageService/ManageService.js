import React from 'react';
import UseService from '../UseService/UseServices';

const ManageService = () => {
    const [service, setService] = UseService();

    const handlerDelete = id => {
        const url = `https://guarded-retreat-61183.herokuapp.com/service/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = service.filter(services => service._id !== id);
                setService(remaining);
            })

    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Your Services</h2>
            {
                service.map(services => <div key={services._id}>
                    <h4>{services.name} <button onClick={()=>handlerDelete(services._id)}>x</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageService;