import React, { Component } from "react";
import "../styles/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="social-icons">
            <a href="https://github.com/AndreaHabib?tab=repositories">
              <img
                src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/github_nhoac9.png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/andrea-habib-730941198/">
              <img
                src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/linkedin_i1m9wc.png"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <p>ANDREA_H &copy; 2021</p>
      </footer>
    );
  }
}
