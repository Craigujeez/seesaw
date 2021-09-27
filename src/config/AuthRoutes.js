import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoutes = ({ component: AuthComponent, ...rest}) => {
    // const auth = useSelector(state => state.auth)
    const loading = useSelector(state => state.loading)
    return ( 
        <Route
          {...rest}
          render={props =>
            !localStorage.token ?(
                <AuthComponent {...props} isLoading={loading.isLoading} />
            ) : (
              //enable this line below to make route protected
              <Redirect to="/dashboard" />
            )
          }
        />

     );
}
 
export default AuthRoutes;
