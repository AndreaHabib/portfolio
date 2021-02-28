import React, { Component } from "react";
import name from "../images/name.png";
import "../styles/navbar.css";

export default class Navbar extends Component {
  state = {
    auth: false,
    slide: 0, // How much should the Navbar slide up or down
    lastScrollY: 0, // Keep track of current position in state
  };
  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    // let scrollToTop = window.scrollTop;
    if (currentScrollY <= 0) {
      this.setState({ slide: "0px" });
    } else if (currentScrollY > lastScrollY) {
      this.setState({ slide: "-250px" });
    } else {
      this.setState({ slide: "0px" });
    }
    this.setState({ lastScrollY: currentScrollY });
  };
  render() {
    return (
      <nav
        onTouchMove={this._onTouchMove}
        style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: "transform 0.5s ease-in-out",
        }}
        fixed="top"
        className="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar animate-navbar smart-scroll justify-content-center"
      >
        <div className="container">
          <div className="navbar-brand logo" href="#">
            {/* Andrea Habib */}
            <img className="rounded float-left img" alt="img" src={name} />
          </div>
        </div>
      </nav>
    );
  }
}
