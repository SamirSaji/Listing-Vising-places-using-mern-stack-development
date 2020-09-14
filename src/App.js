import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/navigation/mainNavigation";
import Users from "./users/pages/users";
function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
