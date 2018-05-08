import React, {Component} from "react"
import "./Footer.css";

export default class footer extends Component {
  render() {
    return (<footer className="footer">
      <div className="container">
        <span className="text-muted">Made by san00</span>
        <a href="https://twitter.com/sancodes"><span className="footer-icons fab fa-twitter "></span></a>
        <a href="https://github.com/san00"><span className="footer-icons fab fa-github"></span></a>
      </div>
    </footer>)
  }
}
