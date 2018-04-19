import React, {Component} from "react"
import {Grid, Image, Col, PageHeader, Row} from "react-bootstrap";
import "./about.css";

export default class about extends Component {
  render() {
    return (<div>
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
      </Grid>
    </div>)
  }
}
