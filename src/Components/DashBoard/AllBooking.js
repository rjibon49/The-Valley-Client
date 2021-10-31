import React, { useEffect, useState } from 'react';

const AllBooking = () => {

    const [booking, setBooking] = useState([]);
    
    useEffect(() => {
        fetch('https://vast-basin-17966.herokuapp.com/booking')
        .then ( res => res.json())
        .then ( data => setBooking(data));
    },[])

    const handleDelete = id => {
        const url = `https://vast-basin-17966.herokuapp.com/booking/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if(data.deletedCount) {
                alert('Delete Successfully')
                const remaining = booking.filter(b => b._id !==id)
                setBooking(remaining);
            }
        })
    }

    return (
        <div className="px-2 my-5 py-5">
            <table className="table table-dark table-hover border border-2">
                <thead>
                    <tr className="text-center">
                        <th scope="col-">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
            {
                booking.map ( b =>                
                <tbody>
                    <tr className="text-center">
                        <td className="border border-2 col-xl-1">{b.title}</td>
                        <td className="border border-2">{b.price}</td>
                        <td className="border border-2">{b.date}</td>
                        <td><button className="btn btn-warning me-2">Update</button> 
                            <button className="btn btn-danger" onClick={ () => handleDelete(b._id)}>Delete</button>
                        </td>
                    </tr>
                </tbody>
                )
            }
            </table>
        </div>
    );
};

export default AllBooking;