import React, {Component} from "react"
import{ Jumbotron, Grid, Row } from "react-bootstrap";
import "./Home.css";
import Work from "./Work";
import MiniAbout from "./MiniAbout";

export default class home extends Component {
  render() {
    return(
      <Grid>
        <Jumbotron>
          <h2>Welcome to ideas</h2>
          <p>A demo portfolio site built with React, React router & React bootstrap</p>
        </Jumbotron>
        <Row>
            <Work/> {/* Use component in layout */}
        </Row>
        <MiniAbout/> {/* Use component in layout */}
      </Grid>
    )
  }
}
