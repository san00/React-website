import React, {Component} from "react"
import "./Footer.css";

export default class footer extends Component {
  render() {
    return (<footer className="footer">
      <div className="container">
        <span className="text-muted">designed by me</span>
        <span className="footer-icons fab fa-twitter "></span>
        <span className="footer-icons fab fa-github"></span>
        <span className="footer-icons fab fa-dribbble"></span>
      </div>
    </footer>)
  }
}
