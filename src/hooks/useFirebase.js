import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuth from "../Components/Firebase/firebaseInit";

initializationAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoding, setIsLoding] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider  = new GithubAuthProvider ();

    const signInUsingGoogle = () => {
        setIsLoding(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => 
        setIsLoding(false));

    }
    const signInUsingGithub = () => {
        setIsLoding(true);
        return signInWithPopup(auth, githubProvider)
        .finally(() => 
        setIsLoding(false));
    }



    useEffect ( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoding(false);
        });
        return () => unsubscribed;
    }, [])

    const lockDown = () => {
        setIsLoding(true);
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(() => 
        setIsLoding(false));
    }

    return {
        user,
        isLoding,
        signInUsingGoogle,
        signInUsingGithub,
        lockDown,
        error
    }
}

export default useFirebase;