//import ListingForm from './components/ListingForm/ListingForm';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "../src/Shared/components/Navigation/MainNavigation";
import Users from './Lib/Users'
// import './App.css'
import Form from './components/SignUp/Form';
const App = () => {
  return (
    // <Users users={[{name: "Abdu"}]}/>
    <Router>
      <MainNavigation />
      <Form/>
    {/* // <div className="App">
    //   <header className="App-header">
    //   </header>
    //   <ListingForm />
    // </div> */}
      </Router>
  );
};

export default App;
