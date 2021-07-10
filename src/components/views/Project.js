import React, { Component } from "react";
import "./styles/project.css";
import { Button } from "react-bootstrap";
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
            <div className="card-deck">
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1623081724/2020819637334518371227591_rqt6fj.jpg"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    Develop for Good - Care Somalia
                  </h4>
                  <p className="card-text">
                    Django, Python, GraphQL (Graphene), PostgreSQL
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/dfg-care-somalia/caresomalia-maternal-delivery-backend"
                  target="_blank"
                >
                  Source Code
                </Button>
              </div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1623079763/Screenshot_from_2021-06-07_11-28-35_ommpqw.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">Hack-A-Project Website</h4>
                  <p className="card-text">
                    Informative website for Hack-A-Project
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/AndreaHabib/club_website"
                  target="_blank"
                >
                  Source Code
                </Button>
                <Button
                  className="button"
                  variant="info"
                  href="https://hack-a-project.netlify.app"
                  target="_blank"
                >
                  Deployed Website
                </Button>
              </div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1621472665/website_mzrsvx.png"
                  alt="Card"
                />

                <div className="card-body">
                  <h4 className="card-title">This Website</h4>
                  <p className="card-text">
                    React/Javascript, JSX, HTML, CSS, Bootstrap, AOS.js,
                    TypewriterJS, particles-bg
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/AndreaHabib/portifolio"
                  target="_blank"
                >
                  Source Code
                </Button>
              </div>
              <div className="w-100"></div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/discord_x0pttb.jpg"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">Discord Bot</h4>
                  <p className="card-text">Python, Discord API/discord.py</p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/AndreaHabib/Discord-bot"
                  target="_blank"
                >
                  Source Code
                </Button>
              </div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/hackathon1_ycllgv.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">CUNY Hackathon 2019</h4>
                  <p className="card-text">
                    Python, Twilio.py, IBM Watson AI (NLP), Twitter API
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/AndreaHabib/Hackathon"
                  target="_blank"
                >
                  Source Code
                </Button>
              </div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/menu_exksr8.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">BattleFood</h4>
                  <p className="card-text">
                    Battleship, food themed, using Java and JavaFX (OOP)
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/AndreaHabib/Final_Project_330_JAVA"
                  target="_blank"
                >
                  Source Code
                </Button>
              </div>
              <div className="w-100"></div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/gamef_tlgsqi.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">GamesFave</h4>
                  <p className="card-text">
                    React, Redux, PostgreSQL, IGDB API, Express, Sequelize,
                    Bootstrap, Javascript, JSX, CSS, AXIOS <br></br> Features:
                    Look up games from API, Login/Register, add game to
                    favorites and view on your profile. Deployed Using Heroku.
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/GameINFO-cc/gamesFaves"
                  target="_blank"
                >
                  Source Code
                </Button>
              </div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/cipher_pbtnka.jpg"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">Analysis of Algorithms (C++)</h4>
                  <p className="card-text">
                    Analysis of insertion sort, merge sort, heap sort, quick
                    sort (& randomized), and text compression app using Huffman
                    algorithm
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/AndreaHabib/CSC382"
                  target="_blank"
                >
                  Source Code
                </Button>
              </div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/map_glzxsc.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">Coronavirus Map</h4>
                  <p className="card-text">
                    Hackathon Orientation Project: 1st place -- React, Redux,
                    PostgreSQL, Google Maps API, CSS, Bootstrap
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/MLH-Fellowship/ttp-team-2"
                  target="_blank"
                >
                  Source Code
                </Button>
              </div>
              <div className="w-100"></div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/GameStore_m1u8vq.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">GameStore</h4>
                  <p className="card-text">
                    Gaming e-commerce website. PHP, HTML, CSS, mySQL
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/AndreaHabib/GameStore"
                  target="_blank"
                >
                  Source Code
                </Button>
                <Button
                  className="button"
                  variant="info"
                  href="https://game-store1.herokuapp.com/view/index.php"
                  target="_blank"
                >
                  Deployed website
                </Button>
              </div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1623081086/logo_codepath_org_jgefty.jpg"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">Jooboze</h4>
                  <p className="card-text">
                    iOS app to track jobs. Used Swift and Parse
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/Jobooze-iOS-App/Jobooze"
                  target="_blank"
                >
                  Source Code
                </Button>
              </div>
              <div className="card mb-4">
                <img
                  className="card-img-top img-fluid"
                  src="https://res.cloudinary.com/andreahabib/image/upload/v1623079972/Screenshot_from_2021-06-07_11-32-42_paakel.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title">Andrea Blog</h4>
                  <p className="card-text">
                    Blog website to share my experiences. Used React-Redux,
                    Javascript, MongoDB, Express.js. Deployed on Heroku
                  </p>
                </div>
                <Button
                  className="button"
                  variant="info"
                  href="https://github.com/AndreaHabib/Blog_Website"
                  target="_blank"
                >
                  Source Code
                </Button>
                <Button
                  className="button"
                  variant="info"
                  href="https://andreablog.herokuapp.com/Blogs"
                  target="_blank"
                >
                  Deployed Website
                </Button>
              </div>
              <div className="w-100"></div>
            </div>

            <span>
              <h3 style={{ color: "white", marginTop: "50px" }}>
                More projects here:{" "}
              </h3>
            </span>
            <span className="span">
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
