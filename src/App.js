import React, { Fragment } from "react";
import "./App.css";
import { Navbar, Landing, EmpDetails } from "./component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing}></Route>
        <Switch>
          <Route exact path="/details" component={EmpDetails}></Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
