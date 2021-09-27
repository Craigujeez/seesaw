/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Redirect, Switch } from 'react-router-dom';
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import ContentLoader from "../components/Loader";
import history from '../helpers/history';

const Routes = props => {
    const LoginAdmin = lazy(() => import('../pages/Auth'));
    const LoginUser = lazy(() => import('../pages/Auth/LoginUser'));
    const UserMonitoring = lazy(() => import('../pages/Auth/UserMonitoring'));
    const ForgotPasswordPage = lazy(() => import('../pages/Auth/ForgotPassword.js'));
    const Dashboard = lazy(() => import('../pages/Dashboard'));
    const Repository = lazy(() => import("../pages/ProjectRepository"));
    const Project = lazy(() => import("../pages/ProjectRepository/Project.js"));
    const Update = lazy(() => import("../pages/ProjectUpdate"));
    const ProjectUpdate = lazy(() => import("../pages/ProjectUpdate/Project.js"));

  return (
    <>
      <BrowserRouter history={history}>
        <Suspense fallback={<ContentLoader type="TailSpin" color="#ccc" h="45" w="45" style={{ margin: "15rem auto", width: "5%",}}/>} >
          <Switch>
            {/* <SignUp
              exact
              path="/create-account"
              component={SignUp}
            /> */}
            <AuthRoutes exact path="/" component={LoginAdmin} />
            <PrivateRoutes exact path="/user-monitoring" component={UserMonitoring} />


            <PrivateRoutes exact path="/user/login" component={LoginUser} />

            <AuthRoutes
              exact
              path="/forgot-password"
              component={ForgotPasswordPage}
            />
            <PrivateRoutes exact path="/dashboard" component={Dashboard} />
            <PrivateRoutes exact path="/project-repository" component={Repository} />
            <PrivateRoutes exact path="/project-repository/:id" component={Project} />
            <PrivateRoutes exact path="/project-update" component={Update} />
            <PrivateRoutes exact path="/project-update/:id" component={ProjectUpdate} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};


export default Routes;