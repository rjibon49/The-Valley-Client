import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../Style/globalStyle.css'

const DestinationDetails = () => {
    const {destinationId} = useParams();
    const [destinationDetails, SetDestinationDetails] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/services/${destinationId}`;
        fetch(url)
        .then ( res => res.json())
        .then ( data => SetDestinationDetails(data));
    }, [])

    const { title, day, night, image, price, description } = destinationDetails;
    return (
        <div className="container-fluid">
            <div className="">
                <img className="tour-bg" src={image} alt="" />
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-xl-7 col-md-6 col-sm-12">
                            <div className="px-2">
                                <p className="fs-5">{description}</p>
                                <p className="fs-5">{description}</p>
                            </div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item border border-secondary rounded border-2">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Included
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Service Charge</li>
                                                    <li>Sightseeing as per our itinerary</li>
                                                    <li>Meal Included as per our itinerary</li>
                                                    <li>Daily Breakfast , Lunch & Diner at Local Restaurant</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item border border-secondary rounded border-2">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Excluded
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Personal Tips</li>
                                                    <li>Personal Cost</li>
                                                    <li>Any Alcohol & beverage</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-xl-5 col-md-6 col-sm-12">
                            <div className="border border-danger rounded border-2 py-5">
                                <div className="text-center mt-5">
                                    <h2>{title}</h2>
                                    <p className="fw-bold fs-3">{day} Days - {night} NIght</p>
                                    <h4>Price= {price}TK</h4>
                                </div>
                                <div className="d-flex justify-content-center">
                                <Link to={'/booking'}>
                                    <button className="btn btn-info fs-4"> Book NoW </button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;