import React, {Component} from "react"
import {Grid, Image, Col, Button} from "react-bootstrap";
import "./About.css";

export default class about extends Component {
  render() {
    return (
      <div>
      <Grid>
        <Col xs={12} sm={8} smOffset={2} md={8} className="about-text">
          <h3>Hello this is about me</h3>
          <p>This is the fun part</p>
          <p>Happy painting, God bless. In this world, everything can be happy. Don't fiddle with it all day. Any little thing can be your friend if you let it be.</p>
        </Col>
        <Col xs={12} sm={8} smOffset={2} md={8}>
          <Image src="assets/matthew-henry-7328-unsplash.jpg"  className="profile-pic" rounded="rounded"/>
          <h4>Sky runner</h4>
          <p>front end developer</p>
          <p >Everyone needs a friend. Friends are the most valuable things in the world. If I paint something, I don't want to have to explain what it is</p>
          <span class="icons fab fa-twitter"></span>
          <span class="icons fab fa-github"></span>
          <span class="icons fab fa-dribbble"> </span>
        </Col>
        <Col xs={12} sm={12} smOffset={2} className="services-header"><h4>Services</h4></Col>
          <Col xs={12} sm={4} smOffset={2} className="services">
            <span class="icons fas fa-camera-retro "></span>
            <h5>Photography</h5>
            <p>Happy painting, God bless. In this world, everything can be happy. Don't fiddle with it all day. Any little thing can be your friend if you let it be</p>
            <Button>Learn more</Button>
          </Col>
          <Col xs={12} sm={4}  smOffset={1} className="services">
            <span class="icons fas fa-laptop "></span>
            <h5>Web Development</h5>
            <p>Happy painting, God bless. In this world, everything can be happy. Don't fiddle with it all day. Any little thing can be your friend if you let it be</p>
            <Button>Learn more</Button>
          </Col>
          <Col xs={12} sm={4} smOffset={2} className="services">
            <span class="icons fas fa-pencil-alt "></span>
            <h5>Design</h5>
            <p>Happy painting, God bless. In this world, everything can be happy. Don't fiddle with it all day. Any little thing can be your friend if you let it be</p>
            <Button>Learn more</Button>
          </Col>
          <Col xs={12} sm={4}  smOffset={1}className="services">
            <span class="icons far fa-folder-open"></span>
            <h5>Consultancy</h5>
            <p>Happy painting, God bless. In this world, everything can be happy. Don't fiddle with it all day. Any little thing can be your friend if you let it be</p>
            <Button>Learn more</Button>
          </Col>
      </Grid>
    </div>
    )
  }
}
