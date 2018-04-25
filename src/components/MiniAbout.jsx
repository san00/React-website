import React, {Component} from "react"
import {Grid, Image, Col, Row, Button} from "react-bootstrap";
import "./MiniAbout.css";

export default class miniabout extends Component {
  render() {
    return(
      <div class="bckgrnd">
      <Grid>
        <Col xs={12} sm={8} smOffset={2} md={8} className="miniabout-text">
          <h3>Hello this is about me</h3>
          <p>Happy painting, God bless. In this world, everything can be happy. Don't fiddle with it all day. Any little thing can be your friend if you let it be.</p>
        </Col>
        <Col xs={12} sm={8} smOffset={2} md={8}>
          <Image src="assets/matthew-henry-7328-unsplash.jpg"  className="profile-pic" rounded="rounded"/>
          <h4>Front end developer</h4>
          <p >Everyone needs a friend. Friends are the most valuable things in the world. If I paint something, I don't want to have to explain what it is</p>
          <span class="mini-icons fab fa-twitter"></span>
          <span class="mini-icons fab fa-github"></span>
          <span class="mini-icons fab fa-dribbble"> </span>
        </Col>
      </Grid>
      </div>
    )
  }
}
