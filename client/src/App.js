import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "../src/Shared/components/Navigation/MainNavigation";
import Users from './Lib/Users'
import Form from './components/SignUp/Form';
const App = () => {
  return (
   
    <Router>
      <MainNavigation />
      <Route path="/signup" exact>
            <Form />
          </Route> 
      
    
      </Router>
  );
};

export default App;
