import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Signup = () => {

    const { signInUsingGoogle } = useAuth();
    const { signInUsingGithub } = useAuth();

    return (
        <div className="text-center my-5 pb-5">
            <Button onClick={signInUsingGoogle} variant="dark" className="me-3 fs-4"><i className="fab fa-google"></i> Google Sign In</Button>
            <Button onClick={signInUsingGithub} variant="dark" className="me-3 fs-4"><i className="fab fa-github"></i> Github Sign In</Button>
        </div>
    );
};

export default Signup;