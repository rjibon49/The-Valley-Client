import React from 'react';
import { Link } from 'react-router-dom';
import './Style/globalStyle.css'

const NotFound = () => {
    return (
        <div className="containe py-5 my-5">
            <div className="text-center">
                <h1 className="nf-t">4o4</h1>
                <h3 className="nf-d">Page Not Found</h3>
                <Link to={`/home`}><button className="btn btn-danger w-25 py-3 fs-2 mt-4 fw-bold">GO HOME</button></Link>
            </div>
        </div>
    );
};

export default NotFound;