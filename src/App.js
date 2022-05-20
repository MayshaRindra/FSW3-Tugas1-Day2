import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './pages/Home';
import Navbar from "./component/Navbar";
// import {Navbar, Nav, Container} from "react-bootstrap";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
