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
            paddingTop: "80px",
          }}
        >
          Experience
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "10px solid #000080",
              color: "#ff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            date="Sept 2021 - Present"
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
              <img
                alt="HTML"
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              />{" "}
              <img
                alt="CSS"
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              />{" "}
              <img
                alt="Javascript"
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              />{" "}
              <img
                alt="GitHub"
                src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              />{" "}
            </span>
            <h3 className="vertical-timeline-element-title">
              NYC Tech Talent Pipeline
            </h3>
            <h4
              style={{ marginBottom: "50px" }}
              className="vertical-timeline-element-subtitle"
            >
              Workshop Instructor
            </h4>
            <ul
              style={{ textAlign: "left", color: "black", fontSize: "medium" }}
            >
              <li>
                Instruct a series of Technical Development workshops on HTML,
                CSS, Javascript, Git and GitHub for Computer Science Students
                for entry into TTP Residency program
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "10px solid #000080",
              color: "#ff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            date="July 2021 - Present"
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            icon={
              <img
                src="https://cdn.substack.com/image/fetch/w_170,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fc3bf4adb-7902-4377-a660-feb3aa06ef1a_1000x1000.png"
                alt="ttp"
                style={{ borderRadius: "100%", width: "60px" }}
                className="workIcon"
              />
            }
          >
            <span className="tag">
              <img
                alt="React"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />{" "}
              <img
                alt="Redux"
                src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
              />{" "}
              <img
                alt="React Router"
                src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
              />{" "}
              <img
                alt="Material UI"
                src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
              />{" "}
            </span>
            <h3 className="vertical-timeline-element-title">Bridging Tech</h3>
            <h4
              style={{ marginBottom: "50px" }}
              className="vertical-timeline-element-subtitle"
            >
              Frontend Developer, Product Associate
            </h4>
            <ul
              style={{ textAlign: "left", color: "black", fontSize: "medium" }}
            >
              <li>
                Present progress of development in all-hands monthly meetings
              </li>
              <li>
                Weekly sprints with product manager to showcase newly
                implemented features and divide the tasks for the next feature
              </li>
              <li>
                Translate a high-fidelity wireframe on Figma to code using
                React-Redux on the client side
              </li>
              <li>
                Use MaterialUI as CSS framework to create custom components and
                make different themes
              </li>
              <li>
                Implemented Merge sort using Javascript in Redux to sort posts
                by likes or date time
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "10px solid #dc143c",
              color: "#fff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
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
              <img
                alt="Python"
                src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"
              />{" "}
              <img
                alt="Django"
                src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
              />{" "}
              <img
                alt="Postgres"
                src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              />{" "}
              <img
                alt="GraphQL"
                src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql"
              />{" "}
            </span>
            <span className="tag2">
              <img
                alt="Postman"
                src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red"
              />{" "}
            </span>
            <h3 className="vertical-timeline-element-title">
              Develop for Good - Care Somalia
            </h3>
            <h4
              style={{ marginBottom: "30px" }}
              className="vertical-timeline-element-subtitle"
            >
              Backend Developer
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "medium" }}>
              The project will be used by health staff of 20 health facilities
              for Internally Displaced People in Somalia and is expected to
              increase hospital birth delivery by 30% in the first year by
              tracking mothers’ hospital visit dates
            </h4>
            <ul style={{ textAlign: "left", fontSize: "medium" }}>
              <li>
                Regular meetings with clients from Somalia, product manager,
                team and mentor to ensure we are on track with the product
                specifications, plan out the features, and create tasks for the
                development team, and discuss business needs.
              </li>
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
              <li>
                Authenticated all GraphQL endpoints using JSON Web Tokens
                (Graphene & JWT)
              </li>
              <li>Finished Documentation using Sphinx and Rinohtype</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "10px solid #72BFE7",
              color: "#fff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            date="June 2021 - July 2021"
            iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            icon={
              <img
                src="https://res.cloudinary.com/andreahabib/image/upload/v1627000875/csi_wuan3q.png"
                alt="ttp"
                style={{ borderRadius: "100%", width: "60px" }}
                className="workIcon"
              />
            }
          >
            <span className="tag">
              <img
                alt="Git"
                src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
              />{" "}
              <img
                alt="GitHub"
                src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              />{" "}
              <img
                alt="hackerrank"
                src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white"
              />{" "}
              <img
                alt="leetcode"
                src="https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black"
              />{" "}
            </span>
            <h3 className="vertical-timeline-element-title">
              College of Staten Island, CUNY2x
            </h3>
            <h4
              style={{ marginBottom: "50px" }}
              className="vertical-timeline-element-subtitle"
            >
              Lead Teaching Assistant, GitHub Campus Expert
            </h4>
            <ul
              style={{ textAlign: "left", color: "black", fontSize: "medium" }}
            >
              <li>
                Compiled and published a{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://andrea-atef.gitbook.io/csi-csc591/"
                >
                  Gitbook page
                </a>{" "}
                that includes the syllabus for the class and professional
                development resources for the students to use.
              </li>
              <li>
                Planned and hosted Git and GitHub workshops to help students be
                better prepared for internships.
              </li>
              <li>
                Helped students with Leetcode and Hackerrank data structure
                interview questions during class time.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "10px solid #ff7f50",
              color: "#fff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
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
              <img
                alt="emberjs"
                src="https://img.shields.io/badge/ember.js-E04E39?style=for-the-badge&logo=emberdotjs&logoColor=white"
              />{" "}
              <img
                alt="Ruby"
                src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white"
              />{" "}
              <img
                alt="Rails"
                src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white"
              />{" "}
              <img
                alt="React"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
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
              <h4
                className="vertical-timeline-element-subtitle"
                style={{
                  marginTop: "20px",
                }}
              >
                Open Source Contribution:
              </h4>
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
                Wrote a{" "}
                <a href="https://meta.discourse.org/t/beginners-guide-to-install-discourse-on-windows-10-for-development/75149/56?u=andreahabib">
                  step-by-step guide
                </a>{" "}
                on how to install the project on Windows 10 and use Windows
                Subsystem for Linux 2 and run the project.
              </li>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{
                  marginTop: "20px",
                }}
              >
                Hackthon:
              </h4>
              <li>
                Leveraged React.js, Javascript and Google Maps API to show the
                map with Covid cases on the client side web application
              </li>
              <li>
                Stored information on a PostgreSQL database for initial user
                registration and login when returning to the web application
              </li>
              <li>
                Awarded <strong style={{ color: "green" }}>1st</strong> out of 8
                teams
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "10px solid #080808",
              color: "#fff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
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
              <img
                alt="React"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />{" "}
              <img
                alt="Postgres"
                src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              />{" "}
              <img
                alt="Bootstrap"
                src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
              />{" "}
              <img
                alt="Redux"
                src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
              />
            </span>
            <span className="tag2">
              <img
                alt="NodeJS"
                src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"
              />{" "}
              <img
                alt="Express.js"
                src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
              />{" "}
              <img
                alt="JavaScript"
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              />{" "}
            </span>
            <h3 className="vertical-timeline-element-title">
              NYC Tech Talent Pipeline
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
          <hr
            style={{
              border: "1px solid #C123C2",
            }}
          ></hr>

          <h2
            className="heading"
            style={{
              marginBottom: "2rem",
              textAlign: "center",
              marginTop: "2rem",
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
            <li>
              {" "}
              <a
                style={{ textDecoration: "none", color: "orange" }}
                href="https://hackcsi.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HackCSI
              </a>
              - Organized, mentored and developed a website for a hackathon
              event for College of Staten Island students, as well as running a
              workshop on version control during the hackathon. The hackathon
              was featured on{" "}
              <a
                style={{ textDecoration: "none", color: "orange" }}
                href="https://csitoday.com/2021/09/hack-csi-puts-computer-science-students-in-competitive-arena/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSI Today
              </a>
              .
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
          <p
            style={{
              marginLeft: "10px",
              textAlign: "left",
              textDecoration: "underline",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "orange" }}
              href="https://githubcampus.expert/AndreaHabib/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Campus Expert
            </a>{" "}
            -{" "}
          </p>
          <ul style={{ textAlign: "left" }}>
            <li>
              Sponsored as a GitHub campus expert to support technical and
              professional development of CSI computer science students
            </li>
            <li>
              Collaborated with computer science academic advisor to compile
              internship prep handbook for computer science students
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
