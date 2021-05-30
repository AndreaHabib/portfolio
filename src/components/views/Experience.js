import React, { Component } from "react";
import "./styles/experience.css";
import MLH from "./mlh.jpg";
import DFG from "./dvg.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default class Experience extends Component {
  render() {
    return (
      <section className="experience">
        <h2
          className="heading"
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          Experience
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid" }}
            date="Jun 2020 – Aug 2020"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <img
                src={MLH}
                alt="mlh"
                style={{ borderRadius: "100%", width: "60px" }}
                className="workIcon"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Major League Hacking - Discourse
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ marginBottom: "50px" }}
            >
              Fellowship
            </h4>
            <ul
              style={{ textAlign: "left", color: "black", fontSize: "medium" }}
            >
              <li>
                Applied Ember.js to fix User Interface issues that were
                preventing sorting text from showing up, and created a modal to
                prompt a warning to the user if they click the delete button on
                a post
              </li>
              <li>
                Utilized Ruby-on-Rails to hide system queries from the backend
                in Discourse
              </li>
              <li>
                Leveraged React.js, Javascript and Google Maps API to show the
                map with Covid cases on the client side web application
              </li>
              <li>
                Stored information on a PostgreSQL database for initial user
                registration and login when returning to the web application
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2021 – Present"
            iconStyle={{ background: "rgb(255, 255,255)", color: "#fff" }}
            icon={
              <img
                src={DFG}
                alt="dfg"
                style={{ borderRadius: "100%", width: "60px" }}
                className="workIcon"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Develop for Good - Care Somalia
            </h3>
            <h4
              style={{ marginBottom: "50px" }}
              className="vertical-timeline-element-subtitle"
            >
              Backend Developer
            </h4>
            <ul
              style={{ textAlign: "left", color: "black", fontSize: "medium" }}
            >
              <li>
                Creating entity-relationship diagram containing a database
                schema to blueprint column data element headers for the client
              </li>
              <li>
                Utilizing Django to implement client-approved database models to
                track data as they relate to hospital service and visits
              </li>
              <li>
                Storing data in PostgreSQL to track staff and patient
                information for administrator and internal employee dashboards
              </li>
              <li>
                Implementing Unit testing using Django to assure that
                server-side development is properly functioning
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className="activities">
          <hr style={{ border: "1px solid white" }}></hr>
          <p style={{ textDecoration: "underline" }}>
            Tech Talent Pipeline, NY - <em>Apprenticeship</em>
          </p>
          <p>
            Interviewed and selected to participate in a full stack development
            bootcamp in which topics on use of PostgreSQL, Express, React.js,
            Node,js were first taught and then applied to delivering a minimum
            viable product in an agile environment.{" "}
          </p>
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
              Founded a club for students to collaborate on projects and leading
              students to develop professionally and technically.
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
              introduce git and github for my computer science college community
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
      </section>
    );
  }
}
