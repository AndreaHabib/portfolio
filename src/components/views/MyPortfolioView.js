import React, { Component } from "react";
import "./styles/MyPortfolioView.css";
import {
  Project,
  Experience,
  Skills,
  Footer,
  Navbar,
  About,
  PhotoGallery,
} from "./index";

class MyPortfolioView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: false,
      mountedContact: false,
      classNameContact: "btn btn-outline-primary",
    };
  }

  dismount = () => {
    this.setState(({ mounted }) => ({ mounted: !mounted }));
  };

  Contact = () => {
    this.setState({ contact: !this.state.contact });
    if (!this.state.mountedContact) {
      this.setState({ classNameContact: "btn btn-outline-primary active" });
      setTimeout(() => {
        this.setState({ mountedContact: !this.state.mountedContact });
      }, 10);
    } else if (this.state.mountedContact) {
      this.setState({ classNameContact: "btn btn-outline-primary" });
      setTimeout(() => {
        this.setState({ mountedContact: !this.state.mountedContact });
      }, 250);
    }
  };

  render() {
    return (
      <main className="page lanidng-page">
        <Navbar />
        <div className="container">
          <About
            contact={this.state.contact}
            Contact={this.Contact}
            classNameContact={this.state.classNameContact}
            mountedContact={this.state.mountedContact}
          />
          <Skills />
          <hr id="experience" style={{ border: "5px solid white" }}></hr>
          <div
            style={{ marginTop: "20px" }}
            className="portfolio-block website"
          >
            <Experience />
            <hr
              id="photoGallery"
              style={{ border: "5px solid white", marginTop: "100px" }}
            ></hr>
            <PhotoGallery />
            <hr
              id="projects"
              style={{ border: "5px solid white", marginTop: "100px" }}
            ></hr>
            <Project />
          </div>
          <Footer />
        </div>
      </main>
    );
  }
}

export default MyPortfolioView;
