import React from "react";
import Nav from "./components/Nav";
import Header from "./components//Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MoreInfo from "./components/MoreInfo";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <section className="nav-section">
        <Nav />
      </section>
      <section className="header-section">
        <Header />
      </section>
      <section className="about-section">
        <About />
      </section>
      <section className="skills-section">
        <Skills />
      </section>

      <section className="moreInfo-section">
        <MoreInfo />
      </section>
      <section className="projects-section">
        <Projects />
      </section>
      <section className="contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
