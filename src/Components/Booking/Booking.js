import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="container-fluid add-service-bg py-5">
            <div className="container py-5 add-service ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                            <label htmlFor="name" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Full Name</label>
                            <div className=" col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input {...register("title", { required: true})} placeholder="Enter Your Full Name" className="form-control"/>
                            </div>
                    </div>
                    <div className="row mb-3">
                            <label htmlFor="price" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Price</label>
                            <div className="col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input type="number" {...register("price", { required: true})}placeholder="Price" className="form-control"/>
                            </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="night" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Booking Date</label>
                        <div className="col-xl-4 col-md-4 col-sm-8 mt-2">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='dd/MM/yyyy' minDate={new Date()} className="w-100 form-control"/>
                        </div>
                    </div>
                    
                    <div className="mx-auto w-75 col-sm:w-100">
                        <input className="btn btn-primary w-25 mt-3 mx-auto fs-3" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;