import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { MainScreen } from "../components/MainScreen";
import { FormScreen } from "../components/FormScreen";
import Workers from "../components/Workers";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/cadastrar" component={FormScreen} />
          <Route exact path="/listar" component={Workers} />
        </Switch>
      </Router>
    </>
  );
};
