import React, {Component} from "react"
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default class navbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Coder</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventkey={1} componentClass={Link} href="/" to="/">home</NavItem>
              <NavItem eventkey={2} componentClass={Link} href="/about" to="/about">about</NavItem>
              <NavItem eventkey={3} componentClass={Link} href="/contact" to="/contact">contact</NavItem>
              <NavItem eventkey={4} componentClass={Link} href="/work" to="/work">work</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
  }
}
