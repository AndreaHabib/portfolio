import React, { Component } from "react";
import "./styles/skills.css";

export default class Skills extends Component {
  render() {
    return (
      <section className="portfolio-block skills">
        <div className="container">
          <div className="heading">
            <h2
              style={{
                padding: "1.3rem",
                textAlign: "center",
              }}
            >
              Special Skills
            </h2>
          </div>
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-md-4 col-lg-4 d-flex align-items-stretch">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-star-outline"></i>
                </div>
                <div className="card-body">
                  <img
                    src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/webdev_rxmsmj.png"
                    className="img-fluid rounded mx-auto d-block"
                    alt="Responsive img"
                  />
                  <h3 className="card-title">Web Development</h3>
                  <p className="card-text">
                    Skills for web development: (PERN) React, Redux, Express,
                    PostgreSQL, Sequelize, Bootstrap, HTML, CSS, Javascript,
                    Node, Restful APIs, JSX, JSON, Ruby on Rails, Emberjs, PHP
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 d-flex align-items-stretch">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-lightbulb-outline"></i>
                </div>
                <div className="card-body">
                  <img
                    src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/coding_ip0nxj.png"
                    className="img-fluid rounded mx-auto d-block"
                    alt="Responsive img"
                  />
                  <h3 className="card-title">Software Engineer</h3>
                  <p className="card-text">
                    Skills for software engineer: Java (JavaFX), Python, C++
                    (Data Structures)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 d-flex align-items-stretch">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-gear-outline"></i>
                </div>
                <div className="card-body">
                  <img
                    src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/tools_nal1p9.png"
                    className="img-fluid rounded mx-auto d-block"
                    alt="Responsive img"
                  />
                  <h3 className="card-title">Tools and Expertise</h3>
                  <p className="card-text">
                    Microsoft Word, Excel, Powerpoint, Visual Studio, Visual
                    Studio Code, Git/Git BASH, Github, Postman, Anaconda, Spydr,
                    Ubuntu-18.04 WSL 2, Windows 10, Computer Troubleshooting,
                    Fixing Errors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
