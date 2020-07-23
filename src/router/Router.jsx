import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Register from "../views/Register";
import DivingBoard from "../views/DivingBoard";

const ProjectRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dive-board" component={DivingBoard} />
    </Switch>
  );
};

export default ProjectRouter;
