import React, { useEffect, useState } from 'react';

const AllService = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://vast-basin-17966.herokuapp.com/services')
        .then ( res => res.json())
        .then ( data => setServices(data));
    },[])

    const handleDelete = id => {
        const url = `https://vast-basin-17966.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if(data.deletedCount) {
                alert('Delete Successfully')
                const remaining = services.filter(service => service._id !==id)
                setServices(remaining);
            }
        })
    }

    return (
        <div className="px-2 my-5 py-5">
            <table className="table table-dark table-hover border border-2">
                <thead>
                    <tr className="text-center">
                        <th scope="col-">TITLE</th>
                        <th scope="col">PACKAGE</th>
                        <th scope="col">IMAGE</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
            {
                services.map ( service =>                
                <tbody key={service._id}>
                    <tr>
                        <td className="border border-2 col-xl-1">{service.title}</td>
                        <td className="border border-2">{service.day}Days-{service.night}Night</td>
                        <td className="border border-2">{service.image}</td>
                        <td className="border border-2">{service.description.slice(0, 50)}</td>
                        <td><button className="btn btn-warning me-2">Update</button> 
                            <button className="btn btn-danger" onClick={ () => handleDelete(service._id)}>Delete</button>
                        </td>
                    </tr>
                </tbody>
                )
            }
            </table>
        </div>
    );
};

export default AllService;