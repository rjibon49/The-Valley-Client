import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Signup = () => {

    const { signInUsingGoogle } = useAuth();
    const { signInUsingGithub } = useAuth();
    const location = useLocation ();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }
    const handleGithubLogin = () => {
        signInUsingGithub()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div className="text-center my-5 pb-5">
            <Button onClick={handleGoogleLogin} variant="dark" className="me-3 fs-4"><i className="fab fa-google"></i> Google Sign In</Button>
            <Button onClick={handleGithubLogin} variant="dark" className="me-3 fs-4"><i className="fab fa-github"></i> Github Sign In</Button>
        </div>
    );
};

export default Signup;