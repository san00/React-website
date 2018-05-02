import React, {Component} from "react"
import {Grid, Row, Image, Col} from "react-bootstrap";
import "./Workfolio.css";

export default class workfoilo extends Component {
  render() {
    return (<Grid>
      <Col xs={8} xsOffset={3} sm={8} smOffset={3} md={6}>
        <h3 class="folio-header">PORTFOLIO</h3>
        <p class="folio-text">Let's put some happy trees and bushes back in here. Trees live in your fan brush, but you have to scare them out. We don't have anything but happy trees here.</p>
        <p>Roles</p>
        <p class="folio-roles">Front-end design</p>
        <p class="folio-roles">Styling</p>
        <p class="folio-roles">Photography</p>
      </Col>
      <Row>
        <Col xs={8} xsOffset={3} sm={8} smOffset={3} md={6}>
          <Image src="assets/autumn-studio-394136-unsplash Cropped.jpg" className="folio-pics pic1"/>
        </Col>
      </Row>
      <Row>
        <Col xs={8} xsOffset={3} sm={8} smOffset={3} md={6} className="image-wrapper">
          <Image src="assets/simon-matzinger-320332-unsplash Cropped.jpg" className="folio-pics"/>
        </Col>
      </Row>
    </Grid>)
  }
}
