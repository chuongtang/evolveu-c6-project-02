import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "../src/Shared/components/Navigation/MainNavigation";
// import UserProfilePage from "./Pages/UserProfilePage";
// import NewListing from './components/ListingForm/NewListing'
import Form from "./components/SignUp/Form";
import LogIn from "./Pages/LogIn"
import BodyDiv from "./components/Pagestyling/BodyDiv";
import CategoryNavLinks from "./components/Listings/components/CategoryNavLinks";

import "./App.css";
const App = () => {
  return (
    <Router>
        <MainNavigation />
      <Switch>
<<<<<<< HEAD
        <Route path='/logIn'>
          <LogIn />
=======
        <Route path="/add_listing" exact>
          <NewListing />
>>>>>>> ecf87e2e0df165bd290bb2ce26eb3e7593b20f12
        </Route>
        <Route path="/signup" exact>
          <Form />
        </Route>
      </Switch>
        <BodyDiv />
      <CategoryNavLinks />
    </Router>
  );
};

export default App;
