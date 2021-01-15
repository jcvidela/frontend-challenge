import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ({ isLogged, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isLogged ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
