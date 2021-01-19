import React, { Component } from "react";
import Anime from "react-anime";
import ScrollEvent from "react-onscroll";
import "./styles/MyPortfolioView.css";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import pic from "./images/my-picture.png";
import { Button } from "react-bootstrap";
import port from "./images/port.png";
import discord from "./images/discord.png";
import todo from "./images/todo.png";
import hackathon1 from "./images/hackathon1.png";
import gamef from "./images/gamef.png";
import map from "./images/map.png";
import cpp from "./images/cpp.png";
import birth from "./images/birth.png";
import email from "./images/email.png";
import face from "./images/face.png";
import phone from "./images/phone.png";
import name from "./images/name.png";
import gameStore from "./images/GameStore.png";
import battlefood from "./images/menu.png";
import webdev from "./images/webdev.png";
import code from "./images/coding.png";
import tools from "./images/tools.png";
import Typewriter from "typewriter-effect";


class MyPortfolioView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: false,
      experience: false,
      mountedContact: false,
      mountedExperience: false,
      autoplay: false,
      classNameContact: "btn btn-outline-primary",
      classNameExperience: "btn btn-outline-primary"
    };
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
  }
  dismount = () => {
    this.setState(({ mounted }) => ({ mounted: !mounted }));
  };
  Contact = () => {
    this.setState({ contact: !this.state.contact });
    if (!this.state.mountedContact) {
      this.setState({ classNameContact: "btn btn-outline-primary active"})
      setTimeout(() => {
        this.setState({ mountedContact: !this.state.mountedCOntact });
      }, 10);
    } else if (this.state.mountedContact) {
      this.setState({ classNameContact: "btn btn-outline-primary"})
      setTimeout(() => {
        this.setState({ mountedContact: !this.state.mountedContact });
      }, 250);
    }
  };

  Experience = () => {
    this.setState({ experience: !this.state.experience });
    if (!this.state.mountedExperience) {
      this.setState({ classNameExperience: "btn btn-outline-primary active"})
      setTimeout(() => {
        this.setState({ mountedExperience: !this.state.mountedExperience });
      }, 10);
    } else if (this.state.mountedExperience) {
      this.setState({ classNameExperience: "btn btn-outline-primary"})
      setTimeout(() => {
        this.setState({ mountedExperience: !this.state.mountedExperience });
      }, 250);
    }
  };

  handleScrollCallback = () => {
    if (!this.state.autoplay) {
      this.setState({ autoplay: !this.state.autoplay });
    }
  };
  render() {
    let contact;
    contact = (
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

    let experience;
    experience = (
      <div
        style={{ borderRadius: "20px", marginTop: "20px" }}
        className="portfolio-block website gradient"
      >
        <div
          style={{ marginLeft: "35px", paddingRight: "20px" }}
          class="contact-info portfolio-info-card"
        >
          <h2>Experience</h2>
          <p>Major League Hacking, NY - <em>Internship</em></p>
          <ul style={{ textAlign: "left" }}>
            <li>Competed in MLH Hackathon against 8 teams and won first place</li>
            <li>Utilized React, Javascript, PostgreSQL and Google Maps API to show map of infected people with COVID19 in your area</li>
            <li>Contributed to the open source community by writing a step-by-step technical documentation to install Windows Subsystem for Linux resulting in the ability of using Discourse on Windows 10</li>
            <li>Worked in agile environment where I engaged in daily stand ups and weekly sprint retrospectives</li>
            <li>Used Ruby on Rails for hiding system queries from frontend along with Rake tasks to unhide them</li>
            <li>Applied Ember.js to fix UI issues that was preventing sorting text from showing up and created a modal that warns a user before deleting a topic with more than 5K views</li>
          </ul>

          <p>Tech Talent Pipeline, NY - <em>Student Intern</em></p>
          <ul style={{ textAlign: "left" }}>
            <li>React.js, Redux, PostgreSQL, Node.js, Express.js, Sequelize, Axios.</li>
            <li>Created user login and registration pages using React.js and Redux Javascript frameworks to create a user friendly front-end</li>
            <li>Used Axios for http POST requests from API to search for video games and add them to favorites page using PostgreSQL, Express.js and Sequelize  </li>
            <li>Worked with many different teams and mentors</li>
          </ul>
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
                src={name}
              />
            </a>
          </div>
        </nav>
        <main class="page lanidng-page">
          <section class="portfolio-block block-intro">
            <div class="container">
              <div style={{ position: "relative" }}>
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
                  Island student, majoring in Computer Science.
                </p>
                <div style={{ marginBottom: "15px" }} className="sub">
                  <Typewriter
                    options={{
                      strings: ["Software Engineer", "Student", "Learner", "Web Development", "Passionate"],
                      autoStart: true,
                      loop: true,
                      delay: 50
                    }}
                  />
                </div>
                <a
                  onClick={this.Experience}
                  className={this.state.classNameExperience}
                  style={{ marginRight: "10px" }}
                  role="button"
                  href="#"
                >
                  Experience
                </a>
                <a
                  onClick={this.Contact}
                  className={this.state.classNameContact}
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
                
                {this.state.mountedContact ? (
                  this.state.contact ? (
                    <Anime opacity={[0, 1]} translateY={[-64, 0]}>
                      <div>{contact}</div>
                    </Anime>
                  ) : (
                    <Anime opacity={[1, 0]} translateY={[0, 64]}>
                      <div>{contact}</div>
                    </Anime>
                  )
                ) : null}

                {this.state.mountedExperience ? (
                  this.state.experience ? (
                    <Anime opacity={[0, 1]} translateY={[-64, 0]}>
                      <div>{experience}</div>
                    </Anime>
                  ) : (
                    <Anime opacity={[1, 0]} translateY={[0, 64]}>
                      <div>{experience}</div>
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
                                        Skills for web development: (PERN) React, Redux,
                                        Express, PostgreSQL, Sequelize, Bootstrap, HTML, CSS,
                                        Javascript, Node, Restful APIs, JSX, JSON, Ruby on Rails,
                                        Emberjs, PHP
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
                                        Skills for software engineer: Java (JavaFX), Python, C++ (Data
                                        Structures)
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
                        React/Javascript, JSX, HTML, CSS, Bootstrap, Anime.js, TypewriterJS
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
                      src={battlefood}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">BattleFood</h4>
                      <p class="card-text">
                        Battleship, food themed, using Java and JavaFX (OOP)
                      </p>
                    </div>
                    <Button
                      variant="info"
                      href="https://github.com/AndreaHabib/Final_Project_330_JAVA"
                      target="_blank"
                    >
                      Checkout the project
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
                
                  <div class="w-100"></div>
                  <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={cpp}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Analysis of Algorithms (C++)</h4>
                      <p class="card-text">
                        Analysis of insertion sort, merge sort, heap sort, quick sort (& randomized),
                        and text compression app using Huffman algorithm
                      </p>
                    </div>
                    <Button
                      variant="info"
                      href="https://github.com/AndreaHabib/CSC382"
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
                    <div class="card mb-4">
                    <img
                      class="card-img-top img-fluid"
                      src={gameStore}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">GameStore</h4>
                      <p class="card-text">
                        Gaming e-commerce website.
                        PHP, HTML, CSS, mySQL
                      </p>
                    </div>
                    <Button
                      variant="info"
                      href="https://github.com/AndreaHabib/GameStore"
                      target="_blank"
                    >
                      Checkout the project
                    </Button>
                    <Button
                      variant="info"
                      href="http://163.238.35.165/~habib/lab1/final_project/view/index.php"
                      target="_blank"
                    >
                      Deployed website
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
