import React, { Component } from "react";
import "./styles/experience.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default class Experience extends Component {
  render() {
    return (
      <section className="section experience">
        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
        >
          <h2
            className="heading"
            style={{ marginBottom: "4rem", textAlign: "center" }}
          >
            Experience
          </h2>
          <div className="interns">
            <div style={{ marginLeft: "1rem", textAlign: "left" }}>
              <p style={{ textDecoration: "underline" }}>
                Major League Hacking, Remote - <em>Internship</em>
              </p>
              <p>
                Worked in an agile environment where I engaged in daily stand
                ups and weekly sprint retrospectives. Worked on MLH hackathon
                and used various tech stacks to help decrease panic associated
                with COVID-19 pandemic crisis. Worked on a client project called
                Discourse.
              </p>
              <ul style={{ textAlign: "left" }}>
                <p>
                  <strong>Client engagement and support:</strong>
                </p>
                <li>
                  Applied Ember.js to fix UI issues that were preventing sorting
                  text from showing up, and create a modal to prompt a warning
                  to the user if they click the delete button on a post.
                </li>
                <li>
                  Contributed to the open source community by writing a
                  step-by-step technical documentation to install Windows
                  Subsystem for Linux resulting in the ability of using
                  Discourse on Windows 10
                </li>
                <li>
                  Utilized Ruby on Rails to hide system queries from the backend
                  in Discourse.
                </li>
              </ul>
              <ul style={{ textAlign: "left" }}>
                <p>
                  <strong>MLH Hackathon Kickoff:</strong>
                </p>
                <li>
                  Led a team of 3 developers and won 1st place in an MLH
                  Hackathon by using PostgreSQL, Express.js, React.js, and
                  Node.js (PERN) tech stacks to build an application that shows
                  a map of covid cases in your area.
                </li>
                <li>
                  Frontend responsibility - Used React.js, Javascript and Google
                  Maps API to show the map with the cases on the frontend
                </li>
                <li>
                  Database responsibility - Used PostgreSQL to store user
                  information through login and register in the database
                </li>
                <li>
                  Used Git/GitHub for version control and created a workflow
                  with my team.
                </li>
              </ul>
              <div style={{ marginLeft: "1rem", textAlign: "left" }}>
                <p style={{ textDecoration: "underline" }}>
                  Develop For Good - Care Somalia, Remote -{" "}
                  <em>Volunteer Backend developer</em>
                </p>
                <p>
                  The project will be used by health staff of 20 health
                  facilities for Internally Displaced People in Somalia and is
                  expected to increase hospital birth delivery by 30% in the
                  first year by tracking mothers’ hospital visit dates
                </p>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    Creating entity-relationship diagram containing a database
                    schema to blueprint column data element headers for the
                    client
                  </li>
                  <li>
                    Utilizing Django to implement client-approved database
                    models to track data as they relate to hospital service and
                    visits
                  </li>
                  <li>
                    Storing data in PostgreSQL to track staff and patient
                    information for administrator and internal employee
                    dashboards
                  </li>
                  <li>
                    Implementing Unit testing using Django to assure that
                    server-side development is properly functioning
                  </li>
                </ul>
              </div>
              <hr style={{ border: "1px solid white" }}></hr>
              <p style={{ textDecoration: "underline" }}>
                Tech Talent Pipeline, NY - <em>Apprenticeship</em>
              </p>
              <p>
                Interviewed and selected to participate in a full stack
                development bootcamp in which topics on use of PostgreSQL,
                Express, React.js, Node,js were first taught and then applied to
                delivering a minimum viable product in an agile environment.{" "}
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  Led a group of 3 members to develop a full-stack web
                  application that allows a user to look up different video
                  games and add them to their favorites on their account.
                </li>
                <li>
                  Created user login and registration pages using React.js and
                  Redux Javascript frameworks to create a user friendly
                  front-end
                </li>
                <li>
                  Used Axios for HTTP POST requests from API to search for video
                  games and add them to favorites page using PostgreSQL,
                  Express.js and Sequelize
                </li>
                <li>
                  Utilized Git/GitHub for version control and continuous
                  development with my team.
                </li>
              </ul>
              <hr
                style={{
                  border: "1px dashed black",
                  marginTop: "3rem",
                  width: "60%",
                }}
              ></hr>
              <h2
                className="heading"
                style={{
                  marginBottom: "2rem",
                  textAlign: "center",
                  marginTop: "3rem",
                }}
              >
                Activities and Leadership
              </h2>
              <p
                style={{
                  marginLeft: "10px",
                  textAlign: "left",
                  textDecoration: "underline",
                }}
              >
                "Hack-A-Project Club" Founder and President -{" "}
                <em>Project-based club at College of Staten Island</em>
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  Founded a club for students to collaborate on projects and
                  leading students to develop professionally and technically.
                </li>
              </ul>
              <p
                style={{
                  marginLeft: "10px",
                  textAlign: "left",
                  textDecoration: "underline",
                }}
              >
                Major League Hacking Sponsored Event Workshops -{" "}
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  <em>"Git into Github"</em> - Led and organized a workshop to
                  introduce git and github for my computer science college
                  community
                </li>
                <li>
                  <em>“Let's Python”</em> - Lead instructor and organizer of a
                  python workshop to introduce python basic syntax, regular
                  expressions, and scraping twitter using BeautifulSoap for my
                  computer science college community
                </li>
              </ul>
              <hr
                style={{
                  border: "2px dashed black",
                }}
              ></hr>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
