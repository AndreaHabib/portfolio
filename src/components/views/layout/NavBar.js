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
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
