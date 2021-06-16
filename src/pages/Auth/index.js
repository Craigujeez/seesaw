/* eslint-disable no-undef */
import React from 'react';
import AuthLayout from '../../components/AuthLayout';
import LoginPage from "./components/LoginPage"

const Login = () => {
    return ( 
        <AuthLayout>
            <LoginPage/>
        </AuthLayout>
     );
}
 
export default Login;