import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRout = ({children, ...rest}) => {
    const {user, isLoding} = useAuth();
    if (isLoding) {
        return <div className="text-center mx-auto">
                    <Spinner animation="border" variant="warnig" className ="" />
                </div>
    }

    return (
        <Route
            {...rest}
            render = {({location}) => user.email ? children : <Redirect to={{
                pathname: '/signup',
                state:{from: location}
            }}></Redirect>}
        >
            
        </Route>
    );
};

export default PrivetRout;