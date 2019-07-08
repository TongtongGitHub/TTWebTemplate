import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../pages/home.jsx";
// import Count from "../pages/Count.jsx";
const PrimaryLayout = () => (
  <div className="primary-layout">
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </div>
);

export default PrimaryLayout;