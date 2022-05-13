import { useEffect, useState } from "react"

const UseService = ()=> {
    const [service , setService] = useState([]);

    useEffect(() => {
        fetch('https://guarded-retreat-61183.herokuapp.com/service')
            .then(res => res.json())
            .then(data =>
                setService(data))

    }, []);

    

    return [service, setService];

}

export default UseService;