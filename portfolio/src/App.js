import React from "react";
import Nav from "./components/Nav";
import Header from "./components//Header";
import About from "./components/About";

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
    </div>
  );
}

export default App;
