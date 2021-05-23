import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom";
import MainNavigation from "../src/Shared/components/Navigation/MainNavigation";
import NewListing from "./components/ListingForm/NewListing";
import Form from "./components/SignUp/Form";
import LogIn from "./Pages/LogIn";
import HomePage from "./Pages/HomePage";
import MainHeader from "./Shared/components/Navigation/MainHeader";

import "./App.css";
const App = () => {
  return (
    <Router>
      <MainHeader />
      <MainNavigation />
      <Switch>
        <HomePage path="/" exact />
        <Route path="/signup" exact>
          <Form />
        </Route>
        <Route path="/add_listing" exact>
          <NewListing />
        </Route>
        <Route path="/logIn">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
