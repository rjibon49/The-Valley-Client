import React from 'react';
import useServices from '../../hooks/useServices';
import Service from './Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="container">
            <div className="row">
                {
                    services.map ( service => <Service
                    key = {service._id}
                    service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;