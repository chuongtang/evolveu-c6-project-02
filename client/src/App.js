// import ListingForm from './components/ListingForm/ListingForm';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "../src/Shared/components/Navigation/MainNavigation";
import Users from './Lib/Users'
// import './App.css';
const App = () => {
  return (
    // <Users users={[{name: "Abdu"}]}/>
    <Router>
      <MainNavigation />
      </Router>
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    //   <ListingForm />

    // </div>
  );
};

export default App;
