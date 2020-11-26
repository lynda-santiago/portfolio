import React from "react";
import Nav from "./components/Nav";
import Header from "./components//Header";

function App() {
  return (
    <div className="App">
      <section className="nav-section">
        <Nav />
      </section>
      <section className="header-section">
        <Header />
      </section>
    </div>
  );
}

export default App;
