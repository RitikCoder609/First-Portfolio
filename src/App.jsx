import React from "react";
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Navbar from "./components/Navbar/Navbar"
import Skills from "./components/Skills/Skills"
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Expeience";



import "./App.css"

const App = () => {
  return (
    <>
      {/* <div>StartHere</div> */}

    <div className="app-container">
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Footer />


      </div>
    </>
  );
};

export default App;
