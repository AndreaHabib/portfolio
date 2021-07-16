import React from "react";
import "./styles/skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import frontend from "./frontend.svg";
import backend from "./backend.svg";
import tools from "./tools.svg";
import databases from "./databases.svg";
// ..
AOS.init();

function Skills() {
  return (
    <section className="skills">
      <div
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        className="container"
      >
        <div className="heading">
          <h2
            style={{
              padding: "1.3rem",
              textAlign: "center",
            }}
          >
            SKILLS
          </h2>
        </div>
        <span className="skills">
          <div className="box">
            <h4>Frontend</h4>
            <img alt="frontend" className="illus" src={frontend} />
            <br></br>
            <span>
              <img
                alt="react"
                src="https://img.icons8.com/officel/50/000000/react.png"
              />
              <img
                alt="redux"
                src="https://img.icons8.com/ios/50/000000/redux.png"
              />
              <img
                alt="js"
                src="https://img.icons8.com/color/50/000000/javascript--v1.png"
              />
              <img
                alt="html"
                src="https://img.icons8.com/color/50/000000/html-5--v2.png"
              />

              <img
                alt="css"
                src="https://img.icons8.com/color/50/000000/css3.png"
              />
              <img
                alt="swift"
                src="https://img.icons8.com/color/50/000000/swift.png"
              />
              <img
                alt="json"
                src="https://img.icons8.com/color/50/000000/json--v1.png"
              />
              <br></br>
              <hr></hr>
              <h5>JavaFX</h5>
            </span>
          </div>
          <div className="box">
            <h4>Backend</h4>
            <img alt="backend" className="illus" src={backend} />
            <br></br>
            <img
              alt="js"
              src="https://img.icons8.com/color/50/000000/javascript--v1.png"
            />
            <img
              alt="node"
              src="https://img.icons8.com/color/50/000000/nodejs.png"
            />
            <img
              alt="php"
              src="https://img.icons8.com/color/50/000000/php.png"
            />
            <img
              alt="django"
              src="https://img.icons8.com/color/48/000000/django.png"
            />
            <img
              alt="python"
              src="https://img.icons8.com/color/48/000000/python--v1.png"
            />{" "}
            <img
              alt="java"
              src="https://img.icons8.com/color/50/000000/java-coffee-cup-logo--v1.png"
            />
            <img
              alt="c++"
              src="https://img.icons8.com/color/50/000000/c-plus-plus-logo.png"
            />
            <img
              alt="ruby"
              src="https://img.icons8.com/color/50/000000/ruby-programming-language.png"
            />
            <img
              alt="graphql"
              src="https://img.icons8.com/color/48/000000/graphql.png"
            />
            <br></br>
            <hr></hr>
            <h5>Sequelize, Express.js, Ruby on Rails, Restful APIs</h5>
          </div>
          <div className="box">
            <h4>Databases</h4>
            <img alt="databases" className="illus" src={databases} />
            <br></br>
            <img
              alt="psql"
              src="https://img.icons8.com/color/48/000000/postgreesql.png"
            />
            <img
              alt="mongo"
              src="https://img.icons8.com/color/50/000000/mongodb.png"
            />
            <img
              alt="mysql"
              src="https://img.icons8.com/color/50/000000/mysql-logo.png"
            />
            <br></br>
            <hr></hr>
            <h5>phpmyadmin, Django ORM</h5>
          </div>
          <div className="box">
            <h4>Tools/Expertise</h4>
            <img alt="tools" className="illus" src={tools} />
            <br></br>
            <img
              alt="msword"
              src="https://img.icons8.com/color/50/000000/ms-word.png"
            />
            <img
              alt="msexcel"
              src="https://img.icons8.com/color/50/000000/ms-excel.png"
            />
            <img
              alt="mspower"
              src="https://img.icons8.com/color/50/000000/ms-powerpoint--v1.png"
            />
            <img
              alt="git"
              src="https://img.icons8.com/color/50/000000/git.png"
            />
            <img
              alt="github"
              src="https://img.icons8.com/color/50/000000/github--v1.png"
            />
            <img
              alt="linux"
              src="https://img.icons8.com/color/50/000000/ubuntu--v1.png"
            />
            <img
              alt="windows"
              src="https://img.icons8.com/color/50/000000/windows-10.png"
            />
            <img
              alt="macos"
              src="https://img.icons8.com/color/50/000000/mac-logo.png"
            />
            <img
              alt="vs"
              src="https://img.icons8.com/color/50/000000/visual-studio.png"
            />
            <img
              alt="vs code"
              src="https://img.icons8.com/color/50/000000/visual-studio-code-2019.png"
            />
            <br></br>
            <hr></hr>
            <h5>Data Structures, Algorithms, Anaconda, Spydr</h5>
          </div>
        </span>
      </div>
    </section>
  );
}

export default Skills;
