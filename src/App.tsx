import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { RootState } from "./redux/reducers/rootReducer";

import { useSelector } from "react-redux";

import LoginScreen from "./screens/LoginScreen";
import HomepageScreen from "./screens/HomepageScreen";

function App() {
  const { user_id } = useSelector((state: RootState) => state.globalReducer);

  useEffect(() => {
    document.title = "RestSystem";
  }, []);

  if (user_id) {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <HomepageScreen />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <LoginScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
