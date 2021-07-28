import React from "react";

export default function ProjectCard(props) {
  return (
    <span className="project">
      <div>
        <p className="ptitle">{props.title}</p>
      </div>
      <div>
        <hr style={{ width: "90%", backgroundColor: "#C123C2" }}></hr>
        <span className="span">
          <img
            className="card-img-top img-fluid"
            src={props.image}
            alt="Card"
          />
          <p className="description">{props.description}</p>
        </span>
      </div>
      <a target="_blank" rel="noreferrer" href={props.url}>
        <div className="semicircle">
          <p className="text-in">Source Code</p>
        </div>
      </a>
    </span>
  );
}
