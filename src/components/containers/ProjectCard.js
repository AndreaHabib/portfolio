import React from "react";

export default function ProjectCard(props) {
  return (
    <span className="project">
      {props.isDeployed ? (
        <div className="quarter-circle-container">
          <div class="quarter-circle-top-right">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={props.href}
              className="quarter-circle-link"
            >
              <p className="quarter-circle-text">Deployed</p>
            </a>
          </div>
        </div>
      ) : undefined}
      <div>
        <p className="ptitle">{props.title}</p>
      </div>
      <div>
        <hr
          style={{
            width: "90%",
            backgroundColor: "#C123C2",
            marginTop: "32px",
          }}
        ></hr>
        <span className="span">
          <img
            className="card-img-top img-fluid"
            src={props.image}
            alt="Card"
          />
          <p className="description">{props.description}</p>
        </span>
      </div>
      <a
        className="semicricleLink"
        target="_blank"
        rel="noreferrer"
        href={props.url}
      >
        <div className="semicircle">
          <p className="text-in">Source Code</p>
        </div>
      </a>
    </span>
  );
}
