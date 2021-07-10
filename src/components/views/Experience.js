import React, { Component } from "react";
import "./styles/experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default class Experience extends Component {
  render() {
    return (
      <section className="experience">
        <h2
          className="heading"
          style={{
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          Experience
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "10px solid #dc143c",
              color: "#fff",
            }}
            date="April 2021 – Present"
            iconStyle={{ background: "rgb(255, 255,255)", color: "#fff" }}
            icon={
              <img
                src="https://res.cloudinary.com/andreahabib/image/upload/v1625917885/dfg_wuzaa4.png"
                alt="dfg"
                style={{ borderRadius: "100%", width: "60px" }}
                className="workIcon"
              />
            }
          >
            <span className="tag">
              <img src="https://img.icons8.com/color/48/000000/python--v1.png" />{" "}
            </span>
            <span className="tag">
              <img src="https://img.icons8.com/color/48/000000/django.png" />
            </span>
            <span className="tag">
              <img src="https://img.icons8.com/color/48/000000/postgreesql.png" />
            </span>
            <span className="tag">
              <img src="https://img.icons8.com/color/48/000000/graphql.png" />
            </span>
            <h3 className="vertical-timeline-element-title">
              Develop for Good - Care Somalia
            </h3>
            <h4
              style={{ marginBottom: "50px" }}
              className="vertical-timeline-element-subtitle"
            >
              Backend Developer Volunteer
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
              <li>
                Used Django Graphene to implement GraphQL and created the
                queries and mutations.
              </li>
              <li>Finished Documentation using Sphinx and Rinohtype</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "10px solid #ff7f50",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid" }}
            date="Jun 2020 – Aug 2020"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <img
                src="https://res.cloudinary.com/andreahabib/image/upload/v1625917885/mlh_jw6fue.jpg"
                alt="mlh"
                style={{ borderRadius: "100%", width: "60px" }}
                className="workIcon"
              />
            }
          >
            <span className="tag">
              <img src="https://img.icons8.com/windows/64/000000/ember.png" />{" "}
            </span>
            <span className="tag">
              <img src="https://img.icons8.com/fluent/48/000000/ruby-programming-language.png" />
            </span>
            <span className="tag">Hackathon</span>
            <span className="tag">
              <img src="https://img.icons8.com/small/64/000000/react.png" />
            </span>
            <h3 className="vertical-timeline-element-title">
              Major League Hacking - Discourse
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{
                marginBottom: "50px",
              }}
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
            contentStyle={{
              borderTop: "10px solid #080808",
              color: "#fff",
            }}
            date="June 2020"
            iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            icon={
              <img
                src="https://res.cloudinary.com/andreahabib/image/upload/v1625917885/ttp_ykvtit.png"
                alt="ttp"
                style={{ borderRadius: "100%", width: "60px" }}
                className="workIcon"
              />
            }
          >
            <span className="tag">
              <img src="https://img.icons8.com/small/64/000000/react.png" />{" "}
            </span>
            <span className="tag">Express.js</span>
            <span className="tag">
              <img src="https://img.icons8.com/color/48/000000/postgreesql.png" />
            </span>
            <span className="tag">
              <img src="https://img.icons8.com/ios-filled/50/000000/redux.png" />
            </span>
            <h3 className="vertical-timeline-element-title">
              Tech Talent Pipeline
            </h3>
            <h4
              style={{ marginBottom: "50px" }}
              className="vertical-timeline-element-subtitle"
            >
              Apprenticeship
            </h4>
            <ul
              style={{ textAlign: "left", color: "black", fontSize: "medium" }}
            >
              <li>
                Led a group of 3 members to develop a full-stack web application
                that allows a user to look up different video games and add them
                to their favorites on their account.
              </li>
              <li>
                Created user login and registration pages using React.js and
                Redux Javascript frameworks to create a user friendly front-end
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
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className="activities">
          <hr style={{ border: "1px solid white" }}></hr>

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
            <li>
              Utilized React.js to create a{" "}
              <a
                style={{ textDecoration: "none", color: "orange" }}
                href="https://hack-a-project.netlify.app"
              >
                website for the club
              </a>
            </li>
          </ul>
          <p
            style={{
              marginLeft: "10px",
              textAlign: "left",
              textDecoration: "underline",
            }}
          >
            Major League Hacking & CUNY2X Sponsored Event Workshops -{" "}
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
              marginTop: "100px",
              border: "2px dashed white",
            }}
          ></hr>
        </div>
      </section>
    );
  }
}
