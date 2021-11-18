import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from "../utils";
import { isLogin } from "./utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const login = isLogin();
  console.log(login);
  return (
    <Route
      {...rest}
      render={(props) =>
        login ? <Component {...props} /> : <Redirect to="/material-login" />
      }
    />
  );
};

export default PrivateRoute;
