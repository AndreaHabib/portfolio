import React, { Component } from "react";
import "./styles/MyPortfolioView.css";
import ParticlesBg from "particles-bg";
import {
  Project,
  Experience,
  Skills,
  Footer,
  About,
  PhotoGallery,
  NavBar,
} from "./index";

class MyPortfolioView extends Component {
  render() {
    return (
      <main className="page lanidng-page">
        <NavBar />
        <div className="container">
          <ParticlesBg color="#fff" num={40} type="cobweb" bg={true} />
          <About />
          <div id="skills"></div>
          <Skills />
          <div id="experience" style={{ marginTop: "-8rem" }}></div>
          <Experience />
          <div id="posters" style={{ marginTop: "-9rem" }}></div>
          <PhotoGallery />
          <div id="project" style={{ marginTop: "-8rem" }}></div>
          <Project />
        </div>
        <Footer />
      </main>
    );
  }
}

export default MyPortfolioView;
