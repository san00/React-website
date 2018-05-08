import React, {Component} from "react"
import {Grid, Col, Image} from "react-bootstrap";
import "./Contact.css";

export default class contact extends Component {
  render() {
    return (<Grid>
      <Col xs={8} xsOffset={3} sm={8} smOffset={3} md={6}>
        <h3 class="contact-header">Contact me</h3>
        <span class="fas fa-map-marker-alt "></span>
        <p class="contact-text">
          123 Alphabet street, Software City, Techville</p>
        <span class="fas fa-phone c-icons"></span>
        <p class="c-info">Tel - 555 5545</p>
        <span class="fas fa-envelope c-icons"></span>
        <p class="c-info">Email - Example@mail.com
        </p>
      </Col>
      <Col xs={12} xsOffset={3} mdOffset={3}>
        <Image src="assets/adria-berrocal-forcada-419751-unsplash Cropped.jpg" className="contact-pic" rounded ="rounded"/>
      </Col>
    </Grid>)
  }
}
