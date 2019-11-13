import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Nav from "./NavComponent/Nav";
import Mac from "./NavComponent/Mac";
function App() {
  return (
    <div className="App">
      <nav>
      <Link exact to="/" >NavHome</Link>

      <Link to ="/mac" >Mac</Link>
      <Link to="/iphone" >iPhone</Link>
      </nav>
      <Route exact path="/" component={Nav} />
      <Route path="/mac"
      render={props => <Mac {...props} macProducts={{}}/>}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
