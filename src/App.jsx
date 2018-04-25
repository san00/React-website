import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        {/* sets up routes to page to be rendered */}
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path = "/Work" component={Work}/>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
