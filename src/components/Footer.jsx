import React,{Component} from "react"
import {Grid, Row,Col} from "react-bootstrap";
import "./Footer.css";

export default class footer extends Component {
render() {
    return(
      <footer className="footer">
        <div className="container">
          <span className="text-muted">designed by me</span>
          <span className="footer-icons fab fa-twitter "></span>
          <span className="footer-icons fab fa-github"></span>
          <span className="footer-icons fab fa-dribbble"> </span>
        </div>

        {/* <Grid>
          <Col >
            <span className="text-muted">designed by me</span>
              </Col>
              <Col>
            <span className="footer-icons fab fa-twitter "></span>
            <span className="footer-icons fab fa-github"></span>
            <span className="footer-icons fab fa-dribbble"> </span>
          </Col>
        </Grid> */}
      </footer>

    )
  }
}
