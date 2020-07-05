import React, { Component } from "react";
import Anime from "react-anime";
import ScrollEvent from "react-onscroll";
import "./styles/MyPortfolioView.css";
import linkedin from "./linkedin.png";
import github from "./github.png";
import facebook from "./facebook.png";
import pic from "./my-picture.png";
import { Button } from "react-bootstrap";
import port from "./port.png";
import discord from "./discord.png";
import todo from "./todo.png";
import hackathon1 from "./hackathon1.png";
import gamef from "./gamef.png";
import cipher from "./cipher.png";
import map from "./map.png";
import cpp from "./cpp.png";
import wip from "./wip.png";
import webdev from "./webdev.png";
import code from "./coding.png";
import tools from "./tools.png";
import birth from "./birth.png";
import email from "./email.png";
import face from "./face.png";
import phone from "./phone.png";
import GRN from "./GRN.png";
import name from "./name.png";

class MyPortfolioView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      mounted: false,
      autoplay: false,
    };
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
  }
  dismount = () => {
    this.setState(({ mounted }) => ({ mounted: !mounted }));
  };
  onClick = () => {
    this.setState({ display: !this.state.display });
    if (!this.state.mounted) {
      setTimeout(() => {
        this.setState({ mounted: !this.state.mounted });
      }, 10);
    } else if (this.state.mounted) {
      setTimeout(() => {
        this.setState({ mounted: !this.state.mounted });
      }, 250);
    }
  };
  handleScrollCallback = () => {
    if (!this.state.autoplay) {
      this.setState({ autoplay: !this.state.autoplay });
    }
  };
  render() {
    //let mounted = this.state;
    let display;
    display = (
      <div
        style={{ borderRadius: "20px", marginTop: "20px" }}
        className="portfolio-block website gradient"
      >
        <div
          style={{ marginLeft: "40px" }}
          class="contact-info portfolio-info-card"
        >
          <h2 style={{ textAlign: "left" }}>Contact Info</h2>
          <div style={{ margin: "15px" }} class="row">
            <div class="col-1">
              <img
                style={{ float: "right" }}
                src={birth}
                className="mx-auto d-block"
              />
            </div>
            <div class="col-9">
              <span style={{ float: "left" }}>07/31/1999</span>
            </div>
          </div>
          <div style={{ margin: "15px" }} class="row">
            <div class="col-1">
              <img
                style={{ float: "right" }}
                src={face}
                className="mx-auto d-block"
              />
            </div>
            <div class="col-9">
              <span style={{ float: "left" }}>Andrea Habib</span>
            </div>
          </div>
          <div style={{ margin: "15px" }} class="row">
            <div class="col-1">
              <img
                style={{ float: "right" }}
                src={phone}
                className="mx-auto d-block"
              />
            </div>
            <div class="col-9">
              <span style={{ float: "left" }}>+1 (929) 422-8163</span>
            </div>
          </div>
          <div style={{ margin: "15px" }} class="row">
            <div class="col-1">
              <img
                style={{ float: "right" }}
                src={email}
                className="mx-auto d-block"
              />
            </div>
            <div class="col-9">
              <span style={{ float: "left" }}>andrea.atef@yahoo.com</span>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
          <div class="container">
            <a class="navbar-brand logo" href="#">
              {/* Andrea Habib */}
              <img
                className="rounded float-left img"
                //style={{ marginLeft: "-55px" }}
                src={name}
              />
            </a>
          </div>
        </nav>
        <main class="page lanidng-page">
          <section class="portfolio-block block-intro">
            <div class="container">
              <div style={{ position: "relative" }}>
                {/* <div>
                  <img src={GRN} class="mx-auto d-block img-fluid" />
                </div> */}
                <div class="avatar">
                  <img
                    style={{
                      height: "165px",
                      border: "5px solid #1E90FF",
                      borderRadius: "11px",
                    }}
                    src={pic}
                  />
                </div>
              </div>
              <div class="about-me">
                <p>
                  Hey! I'm <strong>Andrea Habib!</strong> A College of Staten
                  Island student, majoring in Computer Science. I am interested
                  in Full Stack web development and Software engineering, as
                  well as computer hardware.
                </p>
                <a
                  onClick={this.onClick}
                  class="btn btn-outline-primary"
                  style={{ marginRight: "10px" }}
                  role="button"
                  href="#"
                >
                  Contact
                </a>
                <a
                  class="btn btn-outline-primary"
                  role="button"
                  href="Resume.pdf"
                >
                  Resume
                </a>
                {this.state.mounted ? (
                  this.state.display ? (
                    <Anime opacity={[0, 1]} translateY={[-64, 0]}>
                      <div>{display}</div>
                    </Anime>
                  ) : (
                    <Anime opacity={[1, 0]} translateY={[0, 64]}>
                      <div>{display}</div>
                    </Anime>
                  )
                ) : null}
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
              <div class="row" style={{ textAlign: "center" }}>
                <div class="col-md-4">
                  <div class="card special-skill-item border-0">
                    <div class="card-header bg-transparent border-0">
                      <i class="icon ion-ios-star-outline"></i>
                    </div>
                    <div class="card-body">
                      <img
                        src={webdev}
                        class="img-fluid rounded mx-auto d-block"
                        alt="Responsive image"
                      />
                      <h3 class="card-title">Web Development</h3>
                      <p class="card-text">
                        Skills for web development: (MERN) React, Redux,
                        Express, PostgreSQL, Sequelize, Bootstrap, HTML, CSS,
                        Javascript, Node, Restful APIs, JSX, JSON
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
                      <img
                        src={code}
                        class="img-fluid rounded mx-auto d-block"
                        alt="Responsive image"
                      />
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
                      <img
                        src={tools}
                        class="img-fluid rounded mx-auto d-block"
                        alt="Responsive image"
                      />
                      <h3 class="card-title">Tools and Expertise</h3>
                      <p class="card-text">
                        Microsoft Word, Excel, Powerpoint, Visual Studio, Visual
                        Studio Code, Git/Git BASH, Github, Postman, Anaconda,
                        Spydr, Ubuntu-18.04 WSL 2, Windows 10, Computer
                        Troubleshooting, Fixing Errors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section class="portfolio-block website gradient">
          <div
            style={{ color: "black", textAlign: "center" }}
            class="container"
          >
            <h3
              style={{
                color: "white",
                marginBottom: "50px",
                border: "3px solid white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              My Most Notable Projects on Github
            </h3>
            <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
            {this.state.autoplay ? (
              <Anime
                onScroll={this.onScroll}
                autoplay={this.state.autoplay}
                opacity={[0, 1]}
                translateY={[64, 0]}
                delay={50}
                easing={"easeInOutExpo"}
              >
                <div class="card-deck">
                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={port}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">This Website</h4>
                      <p class="card-text">
                        React/Javascript, JSX, HTML, CSS, Bootstrap, Anime.js
                      </p>
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
                      src={discord}
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
                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={hackathon1}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">CUNY Hackathon 2019</h4>
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
                  <div class="w-100"></div>
                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={todo}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">TODO-List</h4>
                      <p class="card-text">
                        C++, Features: Multiple files, Dynamic Arrays,
                        Classes(OOP) <br></br>
                        React, Features: Add, Remove tasks, mark as done
                      </p>
                    </div>
                    <Button
                      variant="info"
                      href="https://github.com/AndreaHabib/TODO-List"
                      target="_blank"
                    >
                      Checkout the project in C++
                    </Button>
                    <Button
                      variant="info"
                      href="https://github.com/AndreaHabib/TODO-REACT/tree/master/todo"
                      target="_blank"
                    >
                      Checkout the project in React
                    </Button>
                  </div>
                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={gamef}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">GamesFave</h4>
                      <p class="card-text">
                        React, Redux, PostgreSQL, IGDB API, Express, Sequelize,
                        Bootstrap, Javascript, JSX, CSS, AXIOS <br></br>{" "}
                        Features: Look up games from API, Login/Register, add
                        game to favorites and view on your profile. Deployed
                        Using Heroku.
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
                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={cipher}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Ciphers</h4>
                      <p class="card-text">
                        Hill Cipher: Java, Caesar Cipher: C++
                      </p>
                    </div>
                    <Button
                      variant="info"
                      href="https://github.com/AndreaHabib/Ciphers"
                      target="_blank"
                    >
                      Checkout the project
                    </Button>
                  </div>
                  <div class="w-100"></div>
                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={cpp}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">CSC326</h4>
                      <p class="card-text">
                        Most of my 326 projects (Data structures)
                      </p>
                    </div>
                    <Button
                      variant="info"
                      href="https://github.com/AndreaHabib/CSC326"
                      target="_blank"
                    >
                      Checkout the project
                    </Button>
                  </div>
                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={cpp}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">CSC211</h4>
                      <p class="card-text">
                        My collective experience for CSC211, C++
                      </p>
                    </div>
                    <Button
                      variant="info"
                      href="https://github.com/AndreaHabib/CSC211"
                      target="_blank"
                    >
                      Checkout the project
                    </Button>
                  </div>

                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={map}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Coronavirus Map</h4>
                      <p class="card-text">
                        Hackathon Orientation Project: 1st place -- React,
                        Redux, PostgreSQL, Google Maps API, CSS, Bootstrap
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
                  <div class="w-100"></div>
                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={wip}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Pathfinder Algo</h4>
                      <p class="card-text">(WORK IN PROGRERSS)</p>
                    </div>
                    <Button
                      variant="info"
                      href="https://github.com/AndreaHabib/Pathfinder-Algorithm"
                      target="_blank"
                    >
                      Checkout the project
                    </Button>
                  </div>
                </div>
                <div class="w-100"></div>
              </Anime>
            ) : null}
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
  }
}

export default MyPortfolioView;
