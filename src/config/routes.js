/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Redirect, Switch } from 'react-router-dom';
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import ContentLoader from "../components/Loader";
import history from '../helpers/history';

const Routes = props => {
    const Login = lazy(() => import('../pages/Auth'));
    const ForgotPasswordPage = lazy(() => import('../pages/Auth/ForgotPassword.js'));
    const Dashboard = lazy(() => import('../pages/Dashboard'));

  return (
    <>
      <BrowserRouter history={history}>
        <Suspense fallback={<ContentLoader/>} >
          <Switch>
            {/* <SignUp
              exact
              path="/create-account"
              component={SignUp}
            /> */}
            <AuthRoutes exact path="/" component={Login} />

            <AuthRoutes
              exact
              path="/forgot-password"
              component={ForgotPasswordPage}
            />
            <PrivateRoutes exact path="/dashboard" component={Dashboard} />
            
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};


export default Routes;