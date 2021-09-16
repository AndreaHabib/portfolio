import React, { Component } from "react";
import "../styles/NavBar.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="justify-content-center nav">
        <Nav.Item>
          <Nav.Link
            to="skills"
            as={Link}
            className="option"
            style={{ color: "black" }}
          >
            Skills
            <i style={{ marginLeft: "2px" }} class="fas fa-tools"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            to="experience"
            as={Link}
            className="option"
            style={{ color: "black" }}
          >
            Experience
            <i style={{ marginLeft: "2px" }} class="fas fa-stream"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="project"
            className="option"
            style={{ color: "black" }}
          >
            Projects
            <i style={{ marginLeft: "2px" }} class="fas fa-clipboard-list"></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
