import React, { Component } from "react";
import gameStore from "./images/GameStore.png";
import battlefood from "./images/menu.png";
import "./styles/project.css";
import { Button } from "react-bootstrap";
import port from "./images/port.png";
import discord from "./images/discord.png";
import todo from "./images/todo.png";
import hackathon1 from "./images/hackathon1.png";
import gamef from "./images/gamef.png";
import map from "./images/map.png";
import cpp from "./images/cpp.png";

export default class Project extends Component {
  render() {
    return (
      <section id="projects" className="portfolio-block website">
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
              <img className="card-img-top img-fluid" src={port} alt="Card" />
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
                src={discord}
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
                src={hackathon1}
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
              <img className="card-img-top img-fluid" src={todo} alt="Card" />
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
                src={battlefood}
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
              <img className="card-img-top img-fluid" src={gamef} alt="Card" />
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
              <img className="card-img-top img-fluid" src={cpp} alt="Card" />
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
              <img className="card-img-top img-fluid" src={map} alt="Card" />
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
                src={gameStore}
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
          <h3 style={{ color: "white", marginTop: "20px" }}>
            More projects here:{" "}
            <a
              className="moreInfo"
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid white",
                padding: "10px",
                borderRadius: "5px",
              }}
              href="https://github.com/AndreaHabib?tab=repositories"
            >
              Github
            </a>
          </h3>
        </div>
      </section>
    );
  }
}
