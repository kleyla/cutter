import React from "react";
import { Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Guide from "./views/Guide";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/guide" component={Guide}></Route>
    </>
  );
};

export default Routes;
