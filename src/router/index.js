import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../pages/home.jsx";
import Special from "../pages/special.jsx";
const PrimaryLayout = () => (
  <div className="primary-layout">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/special" exact component={Special} />
    </Switch>
  </div>
);

export default PrimaryLayout;