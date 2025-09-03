import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="Contact" className="footer-container">
        <div className="footer-sec1">
          {" "}
          <p>Contact me</p>
        </div>
        <div className="footer-sec2">
          <a href="Navbar">
            <p>Home </p>
          </a>
          <a href="#Education">
            <p>Education</p>
          </a>
          <a href="#Skills">
            <p>Skills </p>
          </a>
        </div>

        <div className="footer-sec3">
          <a 
  href="https://github.com/RitikCoder609" 
  target="_blank" 
  rel="noopener noreferrer"
>
          <div className="img-container image1">
            {/* <img src="/src/assets/github-original.svg" alt="" /> */}
          </div> </a>

          <a href="mailto:dhacker401@gmail.com"> 
          <div className="img-container image2">
            {/* <img src="/src/assets/Gmail-logo-resized.avif" alt="" /> */}
          </div> </a>

           <a href="https://www.linkedin.com/in/ritik-kumar9304" target="_blank"> 
          <div className="img-container image3">
            {/* <img src="/src/assets/linkedin-original.svg" alt="" /> */}
          </div>  </a>
        </div>
        <div className="footer-sec4">
          <p>© 2025 Ritik Kumar. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
