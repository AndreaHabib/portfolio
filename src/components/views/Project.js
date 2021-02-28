import React, { Component } from "react";
import "./styles/project.css";
import { Button } from "react-bootstrap";

export default class Project extends Component {
  render() {
    return (
      <section className="portfolio-block website">
        <div
          style={{ color: "black", textAlign: "center" }}
          className="container"
        >
          <h3
            style={{
              color: "white",
              marginBottom: "50px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            My Most Notable Projects on Github
          </h3>
          <div className="card-deck">
            <div className="card mb-4">
              <img
                className="card-img-top img-fluid"
                src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/port_qszkrl.png"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">This Website</h4>
                <p className="card-text">
                  React/Javascript, JSX, HTML, CSS, Bootstrap, Anime.js,
                  TypewriterJS
                </p>
              </div>
              <Button
                className="button"
                variant="info"
                href="https://github.com/AndreaHabib/portifolio"
                target="_blank"
              >
                Checkout the project
              </Button>
            </div>
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
                Checkout the project
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
                Checkout the project
              </Button>
            </div>
            <div className="w-100"></div>
            <div className="card mb-4">
              <img
                className="card-img-top img-fluid"
                src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/todo_yfc814.png"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">TODO-List</h4>
                <p className="card-text">
                  C++, Features: Multiple files, Dynamic Arrays,
                  classNamees(OOP) <br></br>
                  React, Features: Add, Remove tasks, mark as done
                </p>
              </div>
              <Button
                className="button"
                variant="info"
                href="https://github.com/AndreaHabib/TODO-List"
                target="_blank"
              >
                Checkout the project in C++
              </Button>
              <Button
                className="button"
                variant="info"
                href="https://github.com/AndreaHabib/TODO-REACT/tree/master/todo"
                target="_blank"
              >
                Checkout the project in React
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
                Checkout the project
              </Button>
            </div>
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
                  Look up games from API, Login/Register, add game to favorites
                  and view on your profile. Deployed Using Heroku.
                </p>
              </div>
              <Button
                className="button"
                variant="info"
                href="https://github.com/GameINFO-cc/gamesFaves"
                target="_blank"
              >
                Checkout the project
              </Button>
            </div>
            <div className="w-100"></div>
            <div className="card mb-4">
              <img
                className="card-img-top img-fluid"
                src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/cipher_pbtnka.jpg"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">Analysis of Algorithms (C++)</h4>
                <p className="card-text">
                  Analysis of insertion sort, merge sort, heap sort, quick sort
                  (& randomized), and text compression app using Huffman
                  algorithm
                </p>
              </div>
              <Button
                className="button"
                variant="info"
                href="https://github.com/AndreaHabib/CSC382"
                target="_blank"
              >
                Checkout the project
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
                Checkout the project
              </Button>
            </div>
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
                Checkout the project
              </Button>
              <Button
                className="button"
                variant="info"
                href="http://163.238.35.165/~habib/lab1/final_project/view/index.php"
                target="_blank"
              >
                Deployed website
              </Button>
            </div>
          </div>
          <div className="w-100"></div>
          <span>
            <h3 style={{ color: "white", marginTop: "20px" }}>
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
      </section>
    );
  }
}
