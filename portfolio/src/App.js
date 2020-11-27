import React from "react";
import Nav from "./components/Nav";
import Header from "./components//Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from './components/Resume';
import Projects from './components/Projects'

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
      <section className="resume-section">
        <Resume />
      </section>
      <section className="projects-section">
        <Projects />
      </section>
    </div>
  );
}

export default App;
