import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const Booking = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://vast-basin-17966.herokuapp.com/booking', data)
        .then (res => {
            if(res.data.insertedId){
                alert('Booking Succesfully');
                reset();
            }
        })
    } 
    

    return (
        <div className="container-fluid add-service-bg py-5">
            <div className="container py-5 add-service ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                            <label htmlFor="name" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Full Name</label>
                            <div className=" col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input {...register("name", { required: true})} placeholder="Enter Your Full Name" className="form-control"/>
                            </div>
                    </div>
                    <div className="row mb-3">
                            <label htmlFor="person" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Person</label>
                            <div className="col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input type="number" {...register("person", { required: true})}placeholder="Enter Person Count" className="form-control"/>
                            </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="phone" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Phone</label>
                        <div className="col-xl-4 col-md-4 col-sm-8 mt-2">
                            <input type="number" {...register("phone", { required: true})}placeholder="Phone Number" className="form-control"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                            <label htmlFor="date" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Date</label>
                            <div className="col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input type="date" {...register("date", { required: true})} className="form-control"/>
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