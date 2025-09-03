import React from "react";

function Education() {
  return (
    <>
      <div  id="Education" className="education-container">
        {/* =====================section1 */}

        <div className="education-sec1">
          <div>
            <p className="education-title"> EDUCATION</p>
          </div>
          <div className="education-img-container">
            <div className="education-img"> </div>
          </div>
        </div>

        {/* =====================section2 */}
        {/* <div className="education-sec2">
          <div className="sec2-child1">
            <div className="education-sec2-conatiner1">
              <p className="education-para">
                BCA ( COMPUTER SCIENCE ){" "}
                <span className="education-span">(2024-27)</span>{" "}
              </p>
              <p className="degree-provider">MANIPAL UNIVERSITY JAIPUR </p>
            </div>
          </div>
          <div className="sec2-child1">
            <div className="education-sec2-conatiner2">
              <p>
                BCA student at Manipal University Jaipur specializing in
                Computer Science, aiming to become a skilled Frontend Developer
                with strong problem-solving and coding skills.
              </p>
            </div>
          </div>
          <div className="sec2-child1">
            <div className="education-sec2-conatiner3">
              <p>
                Skilled in web development and modern technologies, with
                projects that demonstrate problem-solving & practical
                implementation.
              </p>
            </div>
          </div>
        </div> */}




<div className="education-sec2">
  {/* BCA */}
  <div className="sec2-child1">
    <div className="education-sec2-conatiner1">
      <p className="education-para">
        BCA ( BACHELOR OF COMPUTER APPLICATION ){" "}
        <span className="education-span">(2024-27)</span>{" "}
      </p>
      <p className="degree-provider">MANIPAL UNIVERSITY JAIPUR</p>
    </div>
  </div>

  {/* Higher Secondary (12th) */}
  <div className="sec2-child1">
    <div className="education-sec2-conatiner1">
      <p className="education-para">
        HIGHER SECONDARY EDUCATION{" "}
        <span className="education-span">(2021)</span>
      </p>
      <p className="degree-provider">JAGAT NARAYAN LAL COLLEGE, BIHAR BOARD</p>
    </div>
  </div>

  {/* Senior Secondary (10th) */}
  <div className="sec2-child1">
    <div className="education-sec2-conatiner1">
      <p className="education-para">
        SENIOR SECONDARY EDUCATION{" "}
        <span className="education-span">(2019)</span>
      </p>
      <p className="degree-provider">PARK MOUNT SCHOOL, BIHAR BOARD</p>
    </div>
  </div>
</div>


        
      </div>
    </>
  );
}

export default Education;
