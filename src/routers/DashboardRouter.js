import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../layout";
import { Genres, Detail } from "../screens";

export default function () {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/genres" component={Genres} />
          <Route exact path="/genre/:genreName" component={Detail} />

          <Redirect to="/genres" />
        </Switch>
      </div>
    </>
  );
}
