import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://vast-basin-17966.herokuapp.com/services')
        .then ( res => res.json())
        .then ( data => setServices(data));
    },[])
    
    return [services];
};

export default useServices;