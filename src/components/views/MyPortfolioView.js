import React, { Component } from "react";
import "./styles/MyPortfolioView.css";
import ParticlesBg from "particles-bg";
import {
  Project,
  Experience,
  Skills,
  Footer,
  About,
  NavBar,
  Contact,
} from "./index";

class MyPortfolioView extends Component {
  render() {
    return (
      <main className="page lanidng-page">
        <NavBar />
        <div className="container-fluid">
          <ParticlesBg color="#fff" num={45} type="cobweb" bg={true} />
          <About />
          <div className="color">
            <div id="skills"></div>
            <Skills />
            <div id="experience" style={{ marginTop: "8rem" }}></div>
            <Experience />
            <div id="project"></div>
            <Project />
            <div id="contact" style={{ marginTop: "8rem" }}></div>
            <Contact />
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}

export default MyPortfolioView;
