import React from "react";
import Nav from "./components/Nav";
import Header from "./components//Header";
import About from "./components/About";
import Skills from "./components/Skills";

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
    </div>
  );
}

export default App;
