import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then (res => {
            if(res.data.insertedId){
                alert('Added Succesfully');
                reset();
            }
        })
    }
    

    return (
        <div className="container-fluid add-service-bg py-5">
            <div className="container py-5 add-service ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                            <label htmlFor="name" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Service Name</label>
                            <div className=" col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input {...register("title", { required: true})} placeholder="Service Name" className="form-control"/>
                            </div>
                    </div>
                    <div className="row mb-3">
                            <label htmlFor="price" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Service Price</label>
                            <div className="col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input type="number" {...register("price", { required: true})}placeholder="Price" className="form-control"/>
                            </div>
                    </div>
                    <div className="row mb-3">
                            <label htmlFor="day" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Service Day</label>
                            <div className="col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input type="number" {...register("day", { required: true})}placeholder="Day" className="form-control"/>
                            </div>
                    </div>
                    <div className="row mb-3">
                            <label htmlFor="night" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Service Night</label>
                            <div className="col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input type="number" {...register("night", { required: true})}placeholder="Day" className="form-control"/>
                            </div>
                    </div>
                    <div className="row mb-3">
                            <label htmlFor="image" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Service Image</label>
                            <div className=" col-xl-4 col-md-4 col-sm-8 mt-2">
                                <input {...register("image", { required: true})} placeholder="Image URL" className="form-control"/>
                            </div>
                    </div>
                    <div className="row mb-3">
                            <label htmlFor="description" className="col-xl-2 col-md-2 col-sm-4 fs-4 fw-bold col-form-label">Service Description</label>
                            <div className="col-xl-4 col-md-4 col-sm-8 mt-2">
                            <textarea type="text" {...register("description", { required: true})} placeholder="Description" className="form-control"/>
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

export default AddService;