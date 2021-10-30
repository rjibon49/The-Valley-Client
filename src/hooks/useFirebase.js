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
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally(() => 
        setIsLoding(false));

    }
    const signInUsingGithub = () => {
        setIsLoding(true);
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
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