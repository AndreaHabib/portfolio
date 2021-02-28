import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles/photoGallery.css";

function PhotoGallery() {
  return (
    <div>
      <h3
        style={{
          color: "white",
          marginBottom: "50px",
          padding: "10px",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        My Posters
      </h3>
      <Carousel controls={true} indicators interval={3500} pause={false}>
        <Carousel.Item>
          <Carousel.Caption className="caption">
            Git into Github Poster
          </Carousel.Caption>
          <img
            className="d-block w-100 image"
            alt="git&github"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1614539681/git_github_avgb4o.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="caption">
            GameStore Poster
          </Carousel.Caption>
          <img
            className="d-block w-100 image"
            alt="gameStore"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1614539665/GameStore_m1u8vq.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="caption">
            Linkedin Background Image
          </Carousel.Caption>
          <img
            className="d-block w-100 image"
            alt="forLinkedin"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1614539682/linkedin_fqlgkw.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="caption">
            Hack-A-Project Poster/Banner
          </Carousel.Caption>
          <img
            className="d-block w-100 image"
            alt="HAP"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1614539683/Hack-A-Project_kest1k.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="caption">
            "Let's Python" Poster
          </Carousel.Caption>
          <img
            className="d-block w-100 image"
            alt="python1"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1614539682/Intro_to_python_q4mqpn.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="caption">
            "Let's Python - Scrapping" Poster
          </Carousel.Caption>
          <img
            className="d-block w-100 image"
            alt="python2"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1614539682/part2_fgcwge.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="caption">
            "Let's Python - Feed a bot" Poster
          </Carousel.Caption>
          <img
            className="d-block w-100 image"
            alt="python3"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1614539681/part3_wi7hqc.png"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PhotoGallery;
