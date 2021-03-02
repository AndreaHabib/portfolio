import React, { Component } from "react";
import "../styles/NavBar.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="justify-content-center nav">
        <Nav.Item>
          <Link to="skills" spy={true} delay={false}>
            <Nav.Link className="option" style={{ color: "black" }}>
              Skills
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="experience" spy={true} delay={false}>
            <Nav.Link className="option" style={{ color: "black" }}>
              Experience
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="project" spy={true} delay={false}>
            <Nav.Link className="option" style={{ color: "black" }}>
              Projects
            </Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
    );
  }
}
