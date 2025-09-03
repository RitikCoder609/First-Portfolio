import React from "react";

function ExperienceCard({ role, duration, description1, description2, description3 }) {
  return (
    <div className="Exp-maincard">
      <div className="Experience-card">
        <div className="Exp-contents">
          
          <div className="Expl-role"> 
            <p className="Exp-1">{role}</p>
            <p className="Exp-2">{duration}</p>
          </div>

          <p className="Exp-company">(Prishal Technolabs Pvt Ltd)</p>
          
          <div className="Exp-des"> 
            <p className="Exp-description">{description1}</p>
            <p className="Exp-description">{description2}</p>
            <p className="Exp-description">{description3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
