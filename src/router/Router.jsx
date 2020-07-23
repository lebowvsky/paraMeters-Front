import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Register from "../views/Register";
import Dives from "../views/Dives";

const ProjectRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dive-board" component={Dives} />
      </Switch>
    </Router>
  );
};

export default ProjectRouter;
