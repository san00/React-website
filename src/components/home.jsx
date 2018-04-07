import React, {Component} from "react"
import {Link} from "react-router-dom";
import{ Jumbotron, Grid, Row, Image, Button } from "react-bootstrap";
import "./home.css";

export default class home extends Component {
  render() {
    return(
      <Grid>
        <Jumbotron>
          <h2>Welcome to ideas</h2>
          <p> Built with React, React-router & React Bootstrap</p>
        </Jumbotron>
        <Link to ="/about">
      </Link>
      </Grid>
    )
  }
}
