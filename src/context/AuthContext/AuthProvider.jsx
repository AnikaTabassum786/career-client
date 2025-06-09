import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.init';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser]= useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);

            // JWT API

            if(currentUser?.email){
                const userData = {email:currentUser.email};
                axios.post('http://localhost:3000/jwt',userData)
                .then(res=>{

                    console.log('token after JWT',res.data)
                    console.log('Raw token:', res.data.token)
                    
                    const token = res.data.token
                    localStorage.setItem('Token',token)
                })
                .catch(error => console.log(error))
            }

            console.log('user in auth state', currentUser)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        createUser,
        user,
        loading,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;