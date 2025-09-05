import React from "react";
import ProjectCard from "./ProjectsCard/Projectcard";

function Projects() {
  return (
    <div id="Project" className="project-container">
      <p className="project-title">Projects</p>

      <div className="projectCard-container">
        <ProjectCard
          title="Frontend Development"
          description="I love building interactive UIs with React"
          image="/src/assets/user1.jpeg"
        />
        <ProjectCard
          title="Backend Development"
          description="Designing and maintaining server-side logic."
          image="/src/assets/user2.jpeg"
        />
        <ProjectCard
          title="Backend Development"
          description="Designing and maintaining server-side logic."
          image="/src/assets/user2.jpeg"
        />
        <ProjectCard
          title="Backend Development"
          description="Designing and maintaining server-side logic."
          image="/src/assets/user2.jpeg"
        />
      </div>
    </div>
  );
}

export default Projects;
  


 