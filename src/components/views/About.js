import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./styles/about.css";

export default class About extends Component {
  render() {
    return (
      <section className="portfolio-block block-intro">
        <div className="about-me">
          <div>
            <div className="avatar">
              <img
                alt="avatar"
                style={{
                  height: "9rem",
                  border: "1px solid black",
                  borderRadius: "200px",
                }}
                src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/backup_aurk3d.jpg"
              />
            </div>
          </div>
          <div>
            <p style={{ fontSize: "1.3rem" }}>
              Hey! I'm <strong>Andrea Habib!</strong> A College of Staten Island
              student, majoring in Computer Science.
            </p>
            <div style={{ marginBottom: "15px" }} className="sub">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Student",
                    "Learner",
                    "Web Development",
                    "Passionate",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
            <a className="btn" role="button" href="Resume.pdf">
              Resume <i className="far fa-file"></i>
            </a>
          </div>
        </div>
        <a href="#skills" className="downArrow bounce">
          <i className="fas fa-chevron-down fa-5x"></i>
        </a>
      </section>
    );
  }
}
