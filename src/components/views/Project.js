import React, { Component } from "react";
import "./styles/project.css";
import ProjectCard from "../containers/ProjectCard";
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
            <div className="projects-box">
              <ProjectCard
                isDeployed={true}
                title="RSS Web Scrape"
                href="https://rss-web-scrape.vercel.app/"
                description="Scrapped RSS internship postings by the CSI Career Center to provide well-formated website for students. Using Next.js, Cheerio, deployed on Vercel"
                image="https://miro.medium.com/max/1400/1*oBm_3saYz4AI_MS6OekdFQ.png"
                url="https://github.com/AndreaHabib/RSS_WebScrape"
              />
              <ProjectCard
                isDeployed={true}
                title="HackCSI"
                href="https://hackcsi.netlify.app/"
                description="React.js - Informative Website for HackCSI hackathon that provides sponsorship deck, FAQ, and form to apply to hackathon."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1627328388/Untitled_design_psaoo7.png"
                url="https://github.com/AndreaHabib/hackathon_website"
              />
              <ProjectCard
                isDeployed={false}
                title="Care Somalia"
                description="The project will be used in Somalia by health staff of 20 health facilities in IDPs and is expected to increase hospital delivery by 30%."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1623081724/2020819637334518371227591_rqt6fj.jpg"
                url="https://github.com/dfg-care-somalia/caresomalia-maternal-delivery-backend"
              />
              <ProjectCard
                isDeployed={true}
                href="https://hack-a-project.netlify.app/"
                title="Hack-A-Project"
                description="React.js - Informative Website for Hack-A-Project Club
                that provides a contact form, membership benefits and
                application to apply."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1623079763/Screenshot_from_2021-06-07_11-28-35_ommpqw.png"
                url="https://github.com/AndreaHabib/club_website"
              />
              <ProjectCard
                isDeployed={true}
                title="This Website"
                href="https://andreahabib.netlify.app/"
                description="This website was created using React.js to showcase all my
                skills, experiences, projects and designs. Constantly
                evolving!"
                image="https://res.cloudinary.com/andreahabib/image/upload/v1621472665/website_mzrsvx.png"
                url="https://github.com/AndreaHabib/portifolio"
              />
              <ProjectCard
                isDeployed={false}
                title="Discord Bot"
                description="Discord bot developed using Python where it ran
                asynchronous in a discord sever. Not deployed, but useful
                to moderate a server."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/discord_x0pttb.jpg"
                url="https://github.com/AndreaHabib/Discord-bot"
              />
              <ProjectCard
                isDeployed={false}
                title="CUNY Hackathon 2019"
                description="Hackathon project developed using Python, Twilio and IBM
                Watson's Natural Processing Language. Scraps twitter for
                wildfire, and alerts everyone in the area."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/hackathon1_ycllgv.png"
                url="https://github.com/AndreaHabib/Hackathon"
              />
              <ProjectCard
                isDeployed={false}
                title="Battlefood"
                description="Final for Object Oriented Programming, developed using
                Java and JavaFX. A Battleship game where you play against
                computer, and remembers last hit location. (food themed)."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/menu_exksr8.png"
                url="https://github.com/AndreaHabib/Final_Project_330_JAVA"
              />
              <ProjectCard
                title="COVID Map"
                isDeployed={false}
                description="This project for Major league hacking kickoff, usind
                React-Redux, Epxress and PostgreSQL. The project's purpose
                was to lower fear in areas with low COVID cases."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/map_glzxsc.png"
                url="https://github.com/MLH-Fellowship/ttp-team-2"
              />
              <ProjectCard
                title="GameFave"
                isDeployed={false}
                description="A full-stack capstone project using PERN stack, developed
                during Tech Talent Pipeline bootcamp. Displays games from
                API, and has feature to add to favorites."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/gamef_tlgsqi.png"
                url="https://github.com/GameINFO-cc/gamesFaves"
              />
              <ProjectCard
                isDeployed={true}
                title="AndreaBlog"
                href="https://andreablog.herokuapp.com/Blogs"
                description="In development blog website using MERN stack, where I can
                make blogs about my experiences during my college years."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1623079972/Screenshot_from_2021-06-07_11-32-42_paakel.png"
                url="https://github.com/AndreaHabib/Blog_Website"
              />
              <ProjectCard
                isDeployed={false}
                title="Analysis of Algorithm"
                description="C++ - Contains analysis of different algoirthms such as
                merge and quick sort, as well as huffman text compression
                program."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/cipher_pbtnka.jpg"
                url="https://github.com/AndreaHabib/CSC382"
              />
              <ProjectCard
                isDeployed={true}
                title="GameStore"
                href="https://game-store1.herokuapp.com/view/index.php"
                description="E-commerce website developed using PHP, mySQL, HTML5,
                CSS3, Bootstrap. Displays different games for consumer to
                checkout and buy."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/GameStore_m1u8vq.png"
                url="https://github.com/AndreaHabib/GameStore"
              />
              <ProjectCard
                isDeployed={false}
                title="Joobze"
                description="Final project for Codepath, job tracker, developed using
                Swift and Parse. Features include profile page, upload
                profile picture, and add/edit/delete jobs."
                image="https://res.cloudinary.com/andreahabib/image/upload/v1623081086/logo_codepath_org_jgefty.jpg"
                url="https://github.com/Jobooze-iOS-App/Jobooze"
              />
            </div>
            <span>
              <h3
                style={{
                  color: "white",
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
              >
                More projects here:{" "}
              </h3>
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
