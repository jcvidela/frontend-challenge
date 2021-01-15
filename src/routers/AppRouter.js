import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRouter } from "./";
import { PublicRouter } from "./";
import { DashboardRouter } from "./";
import { Login } from "../screens";
import { useAuthState } from "../hooks/index";

export default function () {
  const user = useAuthState();
  return (
    <Router>
      <Switch>
        <PublicRouter
          exact
          path="/login"
          component={Login}
          isLogged={user.isLogged}
        />
        <PrivateRouter
          path="/"
          component={DashboardRouter}
          isLogged={user.isLogged}
        />
      </Switch>
    </Router>
  );
}
