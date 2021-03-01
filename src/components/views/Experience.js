import React, { Component } from "react";
import "./styles/experience.css";

export default class Experience extends Component {
  render() {
    return (
      <section className="section experience">
        <div>
          <h2
            className="heading"
            style={{ marginBottom: "4rem", textAlign: "center" }}
          >
            Experience
          </h2>
          <p style={{ textDecoration: "underline" }}>
            Major League Hacking, NY - <em>Internship</em>
          </p>
          <h6>
            Worked in an agile environment where I engaged in daily stand ups
            and weekly sprint retrospectives. Worked on MLH hackathon and used
            various tech stacks to help decrease panic associated with COVID-19
            pandemic crisis. Worked on a client project called Discourse.
          </h6>
          <ul style={{ textAlign: "left" }}>
            <h6>
              <strong>Client engagement and support:</strong>
            </h6>
            <li>
              Applied Ember.js to fix UI issues that were preventing sorting
              text from showing up, and create a modal to prompt a warning to
              the user if they click the delete button on a post.
            </li>
            <li>
              Contributed to the open source community by writing a step-by-step
              technical documentation to install Windows Subsystem for Linux
              resulting in the ability of using Discourse on Windows 10
            </li>
            <li>
              Utilized Ruby on Rails to hide system queries from the backend in
              Discourse.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <h6>
              <strong>MLH Hackathon Kickoff:</strong>
            </h6>
            <li>
              Led a team of 3 developers and won 1st place in an MLH Hackathon
              by using PostgreSQL, Express.js, React.js, and Node.js (PERN) tech
              stacks to build an application that shows a map of covid cases in
              your area.
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
              Used Git/GitHub for version control and created a workflow with my
              team.
            </li>
          </ul>
          <hr style={{ border: "1px solid white" }}></hr>
          <p style={{ textDecoration: "underline" }}>
            Tech Talent Pipeline, NY - <em>Apprenticeship</em>
          </p>
          <h6>
            Interviewed and selected to participate in a full stack development
            bootcamp in which topics on use of PostgreSQL, Express, React.js,
            Node,js were first taught and then applied to delivering a minimum
            viable product in an agile environment.{" "}
          </h6>
          <ul style={{ textAlign: "left" }}>
            <li>
              Led a group of 3 members to develop a full-stack web application
              that allows a user to look up different video games and add them
              to their favorites on their account.
            </li>
            <li>
              Created user login and registration pages using React.js and Redux
              Javascript frameworks to create a user friendly front-end
            </li>
            <li>
              Used Axios for HTTP POST requests from API to search for video
              games and add them to favorites page using PostgreSQL, Express.js
              and Sequelize
            </li>
            <li>
              Utilized Git/GitHub for version control and continuous development
              with my team.
            </li>
          </ul>
        </div>
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
          Activities
        </h2>
        <p
          style={{
            marginLeft: "10px",
            textAlign: "left",
            textDecoration: "underline",
          }}
        >
          "Git into Github" Workshop -{" "}
          <em>Beginner's introduction to Git and Github</em>
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>
            Hosted and facilitated a beginner's Git/Github workshop at College
            of Staten Island, computer science department.
          </li>
          <li>
            Covered basic and critical skills for developers: version control,
            Git, GitHub, terminology and best practices
          </li>
          <li>Sponsored by Major League hacking and CUNY2X</li>
        </ul>
      </section>
    );
  }
}
