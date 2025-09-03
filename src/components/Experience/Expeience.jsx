import React from "react";
import ExperienceCard from "./ExperienceCard";

function ExperienceProject() {
  return (
    <div  id="Experience" className="Experience-MainCard">

      {/* 👇 Heading sirf ek baar upar */}
      <h1 className="Exp-title">Experience</h1>

      <ExperienceCard
        role="Frontend Developer Intern" 
        duration="Nov 2024 – April 2025"
        description1="• Developed and maintained responsive web pages using HTML, CSS, and JavaScript. Patna, India"
        description2="• Assisted in building interactive UI components and improving website performance."
        description3="• Collaborated with team members to implement design changes and bug fixes"
      />

      <ExperienceCard
        role="Frontend Developer Intern" 
        duration="Nov 2024 – April 2025"
        description1="• Developed and maintained responsive web pages using HTML, CSS, and JavaScript. Patna, India"
        description2="• Assisted in building interactive UI components and improving website performance."
        description3="• Collaborated with team members to implement design changes and bug fixes"
      />

    </div>
  );
}

export default ExperienceProject;
