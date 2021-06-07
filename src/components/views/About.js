import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./styles/about.css";
import { Link } from "react-scroll";

export default class About extends Component {
  render() {
    return (
      <section className="portfolio-block block-intro">
        <div className="about-me">
          <div className="main-about">
            <img
              alt="avatar"
              className="image1"
              style={{
                height: "10rem",
                width: "8.5rem",
                borderRadius: "50%",
              }}
              src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/backup_aurk3d.jpg"
            />

            <p className="about-text">
              <br />
              <p
                style={{
                  margin: "1rem 0",
                  fontSize: "23px",
                  lineHeight: "2.4rem",
                }}
              >
                <strong>Hey! I am Andrea Habib,</strong>
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
              </p>
              Constantly learning and exploring new skills. Passionate about
              learning and designing. <br />
              <br />
              <a className="btn1" href="Resume.pdf">
                Resume <i className="far fa-file"></i>
              </a>
            </p>
          </div>
        </div>

        <Link to="skills" spy={true} delay={false} className="downArrow bounce">
          <i className="fas fa-chevron-down fa-5x"></i>
        </Link>
      </section>
    );
  }
}
