import { useEffect, useState } from "react";


const useBooking = () => {
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('https://vast-basin-17966.herokuapp.com/booking')
        .then ( res => res.json())
        .then ( data => setBooking(data));
    },[])
    
    return [booking];
};

export default useBooking;