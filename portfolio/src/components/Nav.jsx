import React from "react";
import SimpleMenu from "./SimpleMenu";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-menu">
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/1bYqggQutJxwptM--w-s-9XS0SlCyAmY9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#extras">Extras</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <h1>Lyn Santi</h1>

      <div className="mobileMenu">
        {" "}
        <SimpleMenu />
      </div>
    </div>
  );
}

export default Nav;
