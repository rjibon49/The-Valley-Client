import React from 'react';
import DashNav from './DashNav';

const DashBoard = () => {
    return (
        <div className="row px-5 my-5">
            <div className="col-xl-2 col-md-4 col-sm-12">
                <DashNav></DashNav>
            </div>
        </div>
    );
};

export default DashBoard;