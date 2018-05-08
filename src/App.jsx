import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Workfolio from "./components/Workfolio";

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
        <Route path = "/Work" component={Workfolio}/>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
