import React, {Component} from "react"
import {Link} from "react-router-dom";
import{ Jumbotron, Grid } from "react-bootstrap";
import "./home.css";

export default class home extends Component {
  render() {
    return(
      <Grid>
        <Jumbotron>
          <h2>Welcome to ideas</h2>
        </Jumbotron>
      </Grid>

    )
  }
}
