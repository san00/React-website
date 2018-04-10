import React, {Component} from "react"
import {Link} from "react-router-dom";
import{ Jumbotron, Grid, Row, Image, Button, Col } from "react-bootstrap";
import "./home.css";

export default class home extends Component {
  render() {
    return(
      <Grid>
        <Jumbotron>
          <h2>Welcome to ideas</h2>
          <p> Built with React, React-router & React Bootstrap</p>
          <Link to ="/about">
        </Link>
        </Jumbotron>
        <Row className = " show-grid text-center">
        <Col xs={12} sm={4} className="image-wrapper">
          <Image src="assets/rawpixel-com-585640-unsplash.jpg" rounded className="site-pic"/>
        </Col>
        <Col xs={12} sm={4} className="image-wrapper">
          <Image src="assets/jon-tyson-228428-unsplash.jpg" rounded className="site-pic"/>
        </Col>
        <Col xs={12} sm={4} className="image-wrapper">
          <Image src="assets/brooke-lark-609902-unsplash.jpg" rounded className="site-pic"/>
        </Col>
        </Row>
        <Row className = "show-grid text-center about-section">
          <h3 className = "about-section-header" >A little about me</h3>
          <Col xs={12} sm={6} md={4} >
            <Image src="assets/rawpixel-com-585640-unsplash.jpg" rounded className="site-pic"/>
          </Col>
          <Col>
            <p>front end developer</p>
            <h4>Sky runner</h4>
            <p >Everyone needs a friend. Friends are the most valuable things in the world. If I paint something, I don't want to have to explain what it is</p></Col>
        </Row>
      </Grid>
    )
  }
}
