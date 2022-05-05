import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/service';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <h4>Add New Service Below</h4>
            <form className='d-flex flex-column  ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' type="name" {...register("name", { required: true })} />
                <textarea className='mb-2' placeholder='description' type="name" {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img")} />
                <input type="submit" value="Add Service Here" />
            </form>

        </div>
    );
};

export default AddService;