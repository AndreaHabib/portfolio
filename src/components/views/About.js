import React from "react";
import Typewriter from "typewriter-effect";
import "./styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function About() {
  return (
    <section
      data-aos="fade-down"
      data-aos-delay="20"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="portfolio-block block-intro"
    >
      <div className="about-me">
        <img
          className="about-image"
          alt="About me"
          src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/backup_aurk3d.jpg"
        />
        <div className="column text">
          <h1>
            <strong>Hey! </strong>
            I'm Andrea Habib!
          </h1>
          <h3 className="text-muted">Based in NYC</h3>
          <hr></hr>
          <h5>
            Passionate, constantly learning and exploring new skills,
            technologies, and tech stacks.
          </h5>
          <h5 className="typewriter">
            <Typewriter
              className="typewriter"
              options={{
                strings: [
                  "Frontend",
                  "Backend",
                  "Object Oriented Programmig",
                  "Designing",
                  "Databases",
                  "Full Stack",
                  "Programming Languages",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h5>
          <span className="icons">
            <a
              title="github"
              href="https://github.com/AndreaHabib"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              title="linkedin"
              href="https://www.linkedin.com/in/andrea-habib-730941198/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              title="resume"
              href="Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-file fa-2x"></i>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
