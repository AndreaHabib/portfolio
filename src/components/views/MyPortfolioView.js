import React from "react";
import "./styles/MyPortfolioView.css";
import linkedin from "./linkedin.png";
import github from "./github.png";
import facebook from "./facebook.png";
import { Link } from "react-router-dom";
import pic from "./my-picture.png";
import { Card, Button } from "react-bootstrap";
import port from "./port.png";
import discord from "./discord.png";
import todo from "./todo.png";
import hackathon1 from "./hackathon1.png";

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
              <a
                class="btn btn-outline-primary"
                style={{ marginRight: "10px" }}
                role="button"
                href="#"
              >
                Hire me
              </a>

              <a
                class="btn btn-outline-primary"
                role="button"
                href="Resume.html"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
        <section class="portfolio-block skills">
          <div class="container">
            <div class="heading">
              <h2
                style={{
                  border: "3px solid #1E90FF",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                Special Skills
              </h2>
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
        <div style={{ color: "black", textAlign: "center" }} class="container">
          <h3 style={{ color: "white" }}>My Most Notable Projects on Github</h3>
          <div class="card-deck">
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x280"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">This Website</h4>
                <p class="card-text">React/Javascript, JSX, CSS, Bootstrap</p>
              </div>
              <Button
                variant="info"
                href="https://github.com/AndreaHabib/portifolio"
                target="_blank"
              >
                Checkout the project
              </Button>
            </div>
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x280"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">Discord Bot</h4>
                <p class="card-text">Python, Discord API/discord.py</p>
              </div>
              <Button
                variant="info"
                href="https://github.com/AndreaHabib/Discord-bot"
                target="_blank"
              >
                Checkout the project
              </Button>
            </div>
            <div class="w-100 d-none d-sm-block d-md-none"></div>
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x280"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">Hackathon</h4>
                <p class="card-text">
                  Python, Twilio.py, IBM Watson AI (NLP), Twitter API
                </p>
              </div>
              <Button
                variant="info"
                href="https://github.com/AndreaHabib/Hackathon"
                target="_blank"
              >
                Checkout the project
              </Button>
            </div>
            <div class="w-100 d-none d-md-block d-lg-none"></div>
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x280"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">TODO-List</h4>
                <p class="card-text">C++</p>
              </div>
              <Button
                variant="info"
                href="https://github.com/AndreaHabib/TODO-List"
                target="_blank"
              >
                Checkout the project
              </Button>
            </div>
            <div class="w-100 d-none d-sm-block d-md-none"></div>
            <div class="w-100 d-none d-lg-block d-xl-none"></div>
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x280"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">GamesFave</h4>
                <p class="card-text">
                  React, Redux, PostgreSQL, IGDB API, Express, Sequelize,
                  Bootstrap, Javascript, JSX, CSS, AXIOS
                </p>
              </div>
              <Button
                variant="info"
                href="https://github.com/GameINFO-cc/gamesFaves"
                target="_blank"
              >
                Checkout the project
              </Button>
            </div>
            <div class="w-100 d-none d-xl-block"></div>
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x300"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">Ciphers</h4>
                <p class="card-text">Hill Cipher: Java, Caesar Cipher: C++</p>
              </div>
              <Button
                variant="info"
                href="https://github.com/AndreaHabib/Ciphers"
                target="_blank"
              >
                Checkout the project
              </Button>
            </div>
            <div class="w-100 d-none d-sm-block d-md-none"></div>
            <div class="w-100 d-none d-md-block d-lg-none"></div>
            <div class="card mb-4">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x270"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">Coronavirus Map</h4>
                <p class="card-text">
                  Hackathon Orientation Project: 1st place -- React, Redux,
                  PostgreSQL, Google Maps API, CSS, Bootstrap
                </p>
              </div>
              <Button
                variant="info"
                href="https://github.com/MLH-Fellowship/ttp-team-2"
                target="_blank"
              >
                Checkout the project
              </Button>
            </div>
          </div>
          <h3 style={{ color: "white" }}>
            More projects here:{" "}
            <a
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid white",
                padding: "5px",
                borderRadius: "5px",
              }}
              href="https://github.com/AndreaHabib?tab=repositories"
            >
              Github
            </a>
          </h3>
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
