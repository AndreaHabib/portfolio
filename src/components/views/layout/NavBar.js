import React, { Component } from "react";
import "../styles/NavBar.css";
import Nav from "react-bootstrap/Nav";

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="justify-content-center nav">
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} href="#skills">
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} href="#experience">
            Experience
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} href="#projects">
            Projects
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
