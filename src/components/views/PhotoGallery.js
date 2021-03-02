import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles/photoGallery.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function PhotoGallery() {
  return (
    <div className="photoGallery">
      <div
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
      >
        <h2
          className="heading"
          style={{
            marginBottom: "50px",
            padding: "10px",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          My Designs
        </h2>
        <Carousel
          className="carousel"
          controls={true}
          indicators
          interval={3500}
          pause={false}
        >
          <Carousel.Item>
            <Carousel.Caption className="caption">
              Git into Github Poster
            </Carousel.Caption>
            <img
              className="d-block image"
              alt="git&github"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1614539681/git_github_avgb4o.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="caption">
              GameStore Poster
            </Carousel.Caption>
            <img
              className="d-block  image"
              alt="gameStore"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/GameStore_m1u8vq.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="caption">
              Linkedin Background Image
            </Carousel.Caption>
            <img
              className="d-block image"
              alt="forLinkedin"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1614539682/linkedin_fqlgkw.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="caption">
              Hack-A-Project Poster/Banner
            </Carousel.Caption>
            <img
              className="d-block image"
              alt="HAP"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1614539683/Hack-A-Project_kest1k.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="caption">
              "Let's Python" Poster
            </Carousel.Caption>
            <img
              className="d-block image"
              alt="python1"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1614539682/Intro_to_python_q4mqpn.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="caption">
              "Let's Python - Scrapping" Poster
            </Carousel.Caption>
            <img
              className="d-block image"
              alt="python2"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1614539682/part2_fgcwge.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="caption">
              "Let's Python - Feed a bot" Poster
            </Carousel.Caption>
            <img
              className="d-block image"
              alt="python3"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1614539681/part3_wi7hqc.png"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default PhotoGallery;
