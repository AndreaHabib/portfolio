import React from "react";
import "./styles/MyPortfolioView.css";
import linkedin from "./linkedin.png";
import github from "./github.png";
import facebook from "./facebook.png";
import { Link } from "react-router-dom";
import pic from "./my-picture.png";
import { Card, Button } from "react-bootstrap";

const MyPortfolioView = () => {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div class="container">
          <a class="navbar-brand logo" href="#">
            Andrea Habib
          </a>
        </div>
      </nav>
      <main class="page lanidng-page">
        <section class="portfolio-block block-intro">
          <div class="container">
            <div
              class="avatar"
              style={{
                backgroundImage: "url({ pic })",
              }}
            >
              <img src={pic} class="avatar" />
            </div>
            <div class="about-me">
              <p>
                Hello! I am <strong>Andrea Habib!</strong> I am a College of
                Staten Island student, majoring in Computer Science. I am
                interested in Full Stack web development and Software engineer,
                as well as the hardware parts of a computer.
              </p>
              <a class="btn btn-outline-primary" role="button" href="#">
                Hire me
              </a>
            </div>
          </div>
        </section>
        <section class="portfolio-block skills">
          <div class="container">
            <div class="heading">
              <h2>Special Skills</h2>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card special-skill-item border-0">
                  <div class="card-header bg-transparent border-0">
                    <i class="icon ion-ios-star-outline"></i>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">Web Development</h3>
                    <p class="card-text">
                      Skills for web development: React, Redux, Express,
                      PostgreSQL, Sequelize, Bootstrap, HTML, CSS, Javascript,
                      Node, Restful APIs, JSX, JSON
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card special-skill-item border-0">
                  <div class="card-header bg-transparent border-0">
                    <i class="icon ion-ios-lightbulb-outline"></i>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">Software Engineer</h3>
                    <p class="card-text">
                      Skills for software engineer: Java, Python, C++ (Data
                      Structures), Matlab
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card special-skill-item border-0">
                  <div class="card-header bg-transparent border-0">
                    <i class="icon ion-ios-gear-outline"></i>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">Tools and Expertise</h3>
                    <p class="card-text">
                      Microsoft Word, Excel, Powerpoint, Visual Studio, Visual
                      Studio Code, Git/Git BASH, Github, Postman, Anaconda,
                      Spydr, Ubuntu-18.04 WSL 2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section class="portfolio-block website gradient">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 col-lg-5 offset-lg-1 text">
              <h3>My Most Notable Projects</h3>
              <Card style={{ width: "18rem" }} className="mr-5">
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>gggggggg</Card.Title>
                  <Card.Text>ggggggggg</Card.Text>
                  <Button variant="info" target="_blank">
                    Checkout the project
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md-12 col-lg-5">
              <div class="portfolio-laptop-mockup">
                <div class="screen">
                  <div
                    class="screen-content"
                    style={{ backgroundImage: "tech/image6.png" }}
                  ></div>
                </div>
                <div class="keyboard"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="page-footer">
        <div class="container">
          <div class="social-icons">
            <a href="https://www.facebook.com/andrea.atef">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://github.com/AndreaHabib?tab=repositories">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/andrea-habib-730941198/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyPortfolioView;
