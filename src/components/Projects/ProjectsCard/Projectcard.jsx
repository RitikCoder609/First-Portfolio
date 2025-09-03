import React from "react";

function ProjectCard({ title, description, image }) {
  return (
    <div className="card">
      <div className="cardImg">
      </div>

      <div className="card-contents">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>

        <div className="skill-text">
          <p className="show-skill">HTML </p>
          <p className="show-skill"> CSS</p>
          <p className="show-skill"> JAVASCRIPT</p>
          <p className="show-skill"> REACT</p>
        </div>
        <div className="card-btn">
          <a href="#" className="project-btn1">
            DEMO
          </a>
          <a href="#" className="project-btn1">
            CODE
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
