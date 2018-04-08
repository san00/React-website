import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import home from "./components/home";
import about from "./components/about";
import contact from "./components/contact";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        {/* sets up routes to page to be rendered */}
        <Navbar />
        <Route exact path="/" component={home}/>
        <Route path="/about" component={about}/>
        <Route path="/contact" component={contact}/>
      </div>
    </Router>
    );
  }
}

export default App;
