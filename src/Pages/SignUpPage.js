import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingUpComponent from '../Components/SignUpComponent';

function SignUpPage() {
    const state = useSelector((state) => state);
    const navigate = useNavigate;

    useEffect(()=> {
        if(state.auth?.accessToken && state.auth?.user){
            navigate("/");
        }else{
            navigate("/SignIn");
        }
    })

    return (
        <div className='absolute 
                top-2/4 left-2/4
                translate-x-[-50%]
                translate-y-[-50%]'>
            <SingUpComponent/>
        </div>
    );
}

export default SignUpPage;