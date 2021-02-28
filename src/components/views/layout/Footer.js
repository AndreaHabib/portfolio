import React, { Component } from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="social-icons">
            <a href="https://github.com/AndreaHabib?tab=repositories">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/andrea-habib-730941198/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <p>ANDREA_H &copy; 2021</p>
      </footer>
    );
  }
}
