import React, {Component} from "react"
import {Link} from "react-router-dom";
import {Grid, Image, Col, Button} from "react-bootstrap";
import "./MiniAbout.css";

export default class miniabout extends Component {
  render() {
    return(
      <div class="miniabout-bckgrnd">
      <Grid>
        <Col xs={12} sm={8} smOffset={2} md={8} className="miniabout-text">
          <h3>About me</h3>
          <p>A little happy sunlight shining through there. In this world, everything can be happy. Don't fiddle with it all day.</p>
        </Col>
        <Col xs={12} sm={8} smOffset={2} md={8}>
          <Image src="assets/andre-benz-230285-unsplash Cropped.jpg"  className="profile-pic" rounded="rounded"/>
          <h4>Front-end developer</h4>
          <p>Every time you practice, you learn more. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. </p>
          <span class="mini-icons fab fa-twitter"></span>
          <span class="mini-icons fab fa-github"></span>
          <span class="mini-icons fab fa-dribbble"> </span>
        </Col>
        <Col xs={12} smOffset={9}>
          <Link to="/About">
          <Button>Learn more</Button>
          </Link>
        </Col>
      </Grid>
      </div>
    )
  }
}
