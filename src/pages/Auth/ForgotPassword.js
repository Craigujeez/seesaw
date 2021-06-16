/* eslint-disable no-undef */
import React from 'react';
import AuthLayout from '../../components/AuthLayout';
import ForgotPasswordPage from "./components/ForgotPasswordPage";

const ForgotPassword = () => {
    return ( 
        <AuthLayout>
            <ForgotPasswordPage/>
        </AuthLayout>
     );
}
 
export default ForgotPassword;