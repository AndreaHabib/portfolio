import React, { Component } from "react";
import "./styles/project.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default class Project extends Component {
  render() {
    return (
      <section id="projects" className="website projects">
        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          style={{ color: "black", textAlign: "center" }}
          className="container"
        >
          <h2
            className="heading"
            style={{
              marginBottom: "50px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Notable Projects
          </h2>
          <div>
            <div className="projects-box">
              <span className="project">
                <div>
                  <p className="ptitle">Care Somalia Project</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1623081724/2020819637334518371227591_rqt6fj.jpg"
                      alt="Card"
                    />
                    <p className="description">
                      The project will be used in Somalia by health staff of 20
                      health facilities in IDPs and is expected to increase
                      hospital delivery by 30%.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/dfg-care-somalia/caresomalia-maternal-delivery-backend"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">Hack-A-Project</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1623079763/Screenshot_from_2021-06-07_11-28-35_ommpqw.png"
                      alt="Card"
                    />
                    <p className="description">
                      React.js - Informative Website for Hack-A-Project Club
                      that provides a contact form, membership benefits and
                      application to apply.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AndreaHabib/club_website"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">This Website</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1621472665/website_mzrsvx.png"
                      alt="Card"
                    />
                    <p className="description">
                      This website was created using React.js to showcase all my
                      skills, experiences, projects and designs. Constantly
                      evolving!
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AndreaHabib/portifolio"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">Discord Bot</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/discord_x0pttb.jpg"
                      alt="Card"
                    />
                    <p className="description">
                      Discord bot that was developed using Python where it ran
                      asynchronous in a discord sever. Not deployed, but useful
                      to moderate a server.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AndreaHabib/Discord-bot"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">CUNY Hackathon 2019</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/hackathon1_ycllgv.png"
                      alt="Card"
                    />
                    <p className="description">
                      Hackathon project developed using Python, Twilio and IBM
                      Watson's Natural Processing Language. Scraps twitter for
                      wildfire, and alerts everyone in the area.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AndreaHabib/Hackathon"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">Battlefood</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/menu_exksr8.png"
                      alt="Card"
                    />
                    <p className="description">
                      Final for Object Oriented Programming, developed using
                      Java and JavaFX. A Battleship game where you play against
                      computer (food themed).
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AndreaHabib/Final_Project_330_JAVA"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">COVID Map</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/map_glzxsc.png"
                      alt="Card"
                    />
                    <p className="description">
                      This project for Major league hacking kickoff, usind
                      React-Redux, Epxress and PostgreSQL. The project's purpose
                      was to lower fear in areas with low COVID cases.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MLH-Fellowship/ttp-team-2"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">GameFave</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/gamef_tlgsqi.png"
                      alt="Card"
                    />
                    <p className="description">
                      A full-stack capstone project using PERN stack, developed
                      during Tech Talent Pipeline bootcamp. Displays games from
                      API, and has feature to add to favorites.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/GameINFO-cc/gamesFaves"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">AndreaBlog</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1623079972/Screenshot_from_2021-06-07_11-32-42_paakel.png"
                      alt="Card"
                    />
                    <p className="description">
                      In development blog website using MERN stack, where I can
                      make blogs about my experiences during my college years.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AndreaHabib/Blog_Website"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">Analysis of Algorithm</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/cipher_pbtnka.jpg"
                      alt="Card"
                    />
                    <p className="description">
                      This repository contains analysis of different algoirthms
                      such as merge and quick sort, as well as huffman text
                      compression program, developed using C++.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AndreaHabib/CSC382"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">GameStore</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/GameStore_m1u8vq.png"
                      alt="Card"
                    />
                    <p className="description">
                      E-commerce website developed using PHP, mySQL, HTML5,
                      CSS3, Bootstrap. Displays different games for the consumer
                      to checkout and buy.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AndreaHabib/GameStore"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
              <span className="project">
                <div>
                  <p className="ptitle">Joobze</p>
                </div>
                <div>
                  <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
                  <span className="span">
                    <img
                      className="card-img-top img-fluid"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1623081086/logo_codepath_org_jgefty.jpg"
                      alt="Card"
                    />
                    <p className="description">
                      Final project for Codepath, job tracker, developed using
                      Swift and Parse.
                    </p>
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Jobooze-iOS-App/Jobooze"
                >
                  <div className="semicircle">
                    <p className="text-in">Source Code</p>
                  </div>
                </a>
              </span>
            </div>
            <span>
              <h3
                style={{
                  color: "white",
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
              >
                More projects here:{" "}
              </h3>
              <a
                className="moreInfo"
                href="https://github.com/AndreaHabib?tab=repositories"
              >
                Github
              </a>
            </span>
          </div>
        </div>
      </section>
    );
  }
}
