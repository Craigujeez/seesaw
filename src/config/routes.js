/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Redirect, Switch } from 'react-router-dom';
import AuthRoutes from "./AuthRoutes"
import ContentLoader from "../components/Loader";
import history from '../helpers/history';

const Routes = props => {
    const Login = lazy(() => import('../pages/Auth'));
    const ForgotPasswordPage = lazy(() => import('../pages/Auth/ForgotPassword.js'));

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
            
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};


export default Routes;