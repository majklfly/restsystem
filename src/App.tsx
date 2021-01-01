import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">{/* <About /> */}</Route>
        <Route path="/users">{/* <Users /> */}</Route>
        <Route path="/">
          <LoginScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
