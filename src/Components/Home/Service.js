import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, title, day, night, image, price} = service
    return (
        <div className="col-xl-4 col-md-4 col-sm-12 my-5">
            <div className="service-img">
                <img className="img-thumbnail" src={image} alt="" />
                <h5 className="text-center mt-3">{title}</h5>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">{day} Days - {night} NIght</p>
                    <h4>Price= {price}TK</h4>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <Link to={`/destinations/${_id}`}>
                        <button className="btn btn-info fs-4"> MORE INFO </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;