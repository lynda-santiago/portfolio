import React from "react";
import SimpleMenu from "./SimpleMenu";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-menu">
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/15Gi42JfvbuRGpAb1eZfsdnVFvr2GeDcX/view?usp=sharing"
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

      <div className="h1-container">
        {" "}
        <h1>Lyn Santi</h1>
        <a
          href="https://www.linkedin.com/in/lynda-santiago-7b58221b4/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Linkedin-256.png"
            alt=""
            className="social-media"
          />
        </a>
        <a
          href="https://twitter.com/LynroseSantiago"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-256.png"
            alt=""
            className="social-media"
          />
        </a>
        <a href="https://github.com/lyntechi" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-256.png"
            alt=""
            className="social-media"
          />
        </a>
      </div>

      <div className="mobileMenu">
        {" "}
        <SimpleMenu />
      </div>
    </div>
  );
}

export default Nav;
