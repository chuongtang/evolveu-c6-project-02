import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "../src/Shared/components/Navigation/MainNavigation";
import NewListing from './components/ListingForm/NewListing'
import Users from "./Lib/Users";
import Form from "./components/SignUp/Form";
import BodyDiv from "./components/Pagestyling/BodyDiv";
import CategoryNavLinks from "./components/Listings/components/CategoryNavLinks";

import "./App.css";
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <NewListing />
      {/* <main>
      </main> */}
      <Switch>
        <Route path="/signup" exact>
          <Form />
        </Route>
        <BodyDiv />
      </Switch>
      <CategoryNavLinks />
    </Router>
  );
};

export default App;
