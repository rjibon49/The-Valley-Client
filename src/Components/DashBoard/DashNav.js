import React from 'react';
import { Link } from 'react-router-dom';

const DashNav = () => {
    return (
        <div className="text-center">
            <Link to="/addservice">Add Service</Link>
        </div>
    );
};

export default DashNav;