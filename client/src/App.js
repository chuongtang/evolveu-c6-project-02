import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "../src/Shared/components/Navigation/MainNavigation";
import Users from "./Lib/Users";
import Form from "./components/SignUp/Form";
import BodyDiv from "./components/Pagestyling/BodyDiv";


import "./App.css";
const App = () => {
  return (
    <Router>
      <MainNavigation />
      {/* <main>
      </main> */}
      <Switch>
      <Route path="/signup" exact>
        <Form />
      </Route>
      </Switch>
      {/* <BodyDiv/>       */}
    </Router>
  );
};

export default App;
