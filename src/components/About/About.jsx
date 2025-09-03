import React from "react";

function About() {
  return (
    <>
      <div id="About" className="about-container">
        <div className="about-sec1">
          <div className="about-child1">
            <div className="child1-baby1">
              <p className="about-text1"> HEY, I AM RITIK</p>{" "}
            </div>
            <div className="child1-baby2">
             
                <p>A Computer Science student in 3rd semester</p>
                <p>A passionate learner and aspiring Software Developer</p>
                <p>
                  Proficient in building responsive and interactive webp              applications
                </p>
            
            </div>


           <div className="child1-baby3">
<a href="/" download="Ritik-Kumar-Resume.pdf">
  <button className="about-btn1">RESUME</button>
</a>


  <button className="about-btn2">HIRE ME</button>
</div>


          </div>
          <div className="about-child2">
            <div className="child2-baby"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
