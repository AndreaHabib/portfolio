import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import pic from "./images/my-picture.png";
import Anime from "react-anime";
import email from "./images/email.png";
import face from "./images/face.png";
import phone from "./images/phone.png";
import "./styles/about.css";

export default class About extends Component {
  render() {
    let contact;
    contact = (
      <div
        id="contact"
        style={{ borderRadius: "20px", marginTop: "20px" }}
        className="portfolio-block website"
      >
        <div
          style={{ marginLeft: "40px" }}
          className="contact-info portfolio-info-card"
        >
          <h2 style={{ textAlign: "left" }}>Contact Info</h2>
          <div style={{ margin: "15px" }} className="row">
            <div className="col-1">
              <img
                style={{ float: "right" }}
                src={face}
                className="mx-auto d-block"
                alt="img"
              />
            </div>
            <div className="col-9">
              <span style={{ float: "left" }}>Andrea Habib</span>
            </div>
          </div>
          <div style={{ margin: "15px" }} class="row">
            <div className="col-1">
              <img
                style={{ float: "right" }}
                src={phone}
                className="mx-auto d-block"
                alt="img"
              />
            </div>
            <div className="col-9">
              <span style={{ float: "left" }}>+1 (929) 422-8163</span>
            </div>
          </div>
          <div style={{ margin: "15px" }} class="row">
            <div className="col-1">
              <img
                alt="img"
                style={{ float: "right" }}
                src={email}
                className="mx-auto d-block"
              />
            </div>
            <div className="col-9">
              <span style={{ float: "left" }}>andrea.atef@yahoo.com</span>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <section
        style={{ marginTop: "100px" }}
        className="portfolio-block block-intro"
      >
        <div style={{ position: "relative" }}>
          <div className="avatar">
            <img
              alt="avatar"
              style={{
                height: "165px",
                border: "5px solid black",
                borderRadius: "11px",
              }}
              src={pic}
            />
          </div>
        </div>
        <div className="about-me">
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
          <a
            href="#experience"
            className="btn btn-outline-primary"
            style={{ marginRight: "10px" }}
            role="button"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="btn btn-outline-primary"
            style={{ marginRight: "10px" }}
            role="button"
          >
            Projects
          </a>
          <a
            onClick={this.props.Contact}
            className={this.props.classNameContact}
            style={{ marginRight: "10px" }}
            role="button"
          >
            Contact
          </a>
          <a
            className="btn btn-outline-primary"
            role="button"
            href="Resume.pdf"
          >
            Resume
          </a>
          {this.props.mountedContact ? (
            this.props.contact ? (
              <Anime opacity={[0, 1]} translateY={[-64, 0]}>
                <div>{contact}</div>
              </Anime>
            ) : (
              <Anime opacity={[1, 0]} translateY={[0, 64]}>
                <div>{contact}</div>
              </Anime>
            )
          ) : null}
        </div>
      </section>
    );
  }
}
