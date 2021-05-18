import React from 'react';
import './App.css';
import ListingForm from './components/ListingForm';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
        > */}
          {/* This will be our MERN Project
        </a> */}
      </header>
      <ListingForm />
      <Form/>
    </div>
  );
}
export default App;
