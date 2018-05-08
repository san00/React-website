import React, {Component} from "react"
import {Link} from "react-router-dom";
import {Grid, Row, Image, Col} from "react-bootstrap";
import "./Work.css";

export default class work extends Component {
  render() {
    return (<Link to="/Work">
      <Grid>
        <Row className=" show-grid text-center">
          <Col xs={4} sm={4} className="image-wrapper">
            <Image src="assets/rawpixel-com-585640-unsplash Cropped.jpg" className="homePage-pics"/>
          </Col>
          <Col xs={4} sm={4} className="image-wrapper">
            <Image src="assets/autumn-studio-394136-unsplash Cropped.jpg" className="homePage-pics"/>
          </Col>
          <Col xs={4} sm={4} className="image-wrapper">
            <Image src="assets/simon-matzinger-320332-unsplash Cropped.jpg" className="homePage-pics"/>
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={4} className="image-wrapper">
            <Image src="assets/autumn-studio-394136-unsplash Cropped.jpg" className="homePage-pics"/>
          </Col>
          <Col xs={4} sm={4} className="image-wrapper">
            <Image src="assets/simon-matzinger-320332-unsplash Cropped.jpg" className="homePage-pics"/>
          </Col>
          <Col xs={4} sm={4} className="image-wrapper">
            <Image src="assets/rawpixel-com-585640-unsplash Cropped.jpg" className="homePage-pics"/>
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={4} className="image-wrapper">
            <Image src="assets/simon-matzinger-320332-unsplash Cropped.jpg" className="homePage-pics"/>
          </Col>
          <Col xs={4} sm={4} className="image-wrapper">
            <Image src="assets/rawpixel-com-585640-unsplash Cropped.jpg" className="homePage-pics"/>
          </Col>
          <Col xs={4} sm={4} className="image-wrapper">
            <Image src="assets/autumn-studio-394136-unsplash Cropped.jpg" className="homePage-pics"/>
          </Col>
        </Row>
      </Grid>
    </Link>)
  }
}
