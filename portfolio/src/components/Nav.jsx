import React from "react";
import SimpleMenu from "./SimpleMenu";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-menu">
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Resume</li>
          <li>Projects</li>
          <li>Extras</li>
          <li>Contact</li>
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
