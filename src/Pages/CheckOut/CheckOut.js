import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hook/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            addrerss: event.target.value,
            phone: event.target.value
        }
        axios.post('https://guarded-retreat-61183.herokuapp.com/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked');
                event.target.reset();
            }
        })
    }
    // const [user , setUser] = useState({
    //     name : "Saklain Mustak",
    //     email : "saklainm71@gmail.com",
    //     address : "Dhanmondi",
    //     phone : "0101010"
    // })
    // const handleAddressChange = event =>{
    //     console.log(event.target.value);
    //     const {address, ...rest} = user;
    //     const newAddrerss = event.target.value;
    //     const newUser = {address: newAddrerss, ...rest};
    //     setUser(newUser);
    //     console.log(newUser);
    // }
    return (
        <div className='w-50 mx-auto'>

            <h3><ul><u>Please order:</u></ul> <br /> {service.name}</h3>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2 ' type="text" name="name" placeholder='name' value={user?.displayName} required readOnly /> <br />
                <input className='w-100 mb-2 ' type="email" name="email" value={user?.email} placeholder='email' required readOnly disabled /> <br />
                <input className='w-100 mb-2 ' type="text" name="service" value={service?.name} placeholder='service' required readOnly /> <br />
                <input className='w-100 mb-2 ' type="text" name="address" placeholder='address' autoComplete='off' required /> <br />
                <input className='w-100 mb-2 ' type="text" name="phone" placeholder='phone' required autoComplete='off' /> <br />
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CheckOut;