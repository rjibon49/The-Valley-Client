import React from 'react';
import useServices from '../../hooks/useServices';
import Destination from './Destination';

const Destinations = () => {
    const [destinations] = useServices();
    console.log(destinations);
    return (
        <div className="container my-5">
            <div className="row my-5">
                {
                    destinations.map ( destination => <Destination
                    key = {destination._id}
                    destination = {destination}
                    ></Destination>)
                }
            </div>
        </div>
    );
};

export default Destinations;