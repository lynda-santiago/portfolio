import React from "react";
import { heartsImg } from "../svgHelpers/svgVariables";

function Header() {
  return (
    <div className="header-container">
      <div className="grid">
        <div>
          <p>My Name is Lynda Santiago</p>
          <h3>
            I Am A Web Developer
            <br /> & UI Designer
          </h3>
          <p>This Is Truly My Passion</p>
          <button>hire me</button>
        </div>

        <div>{heartsImg}</div>
      </div>
    </div>
  );
}
export default Header;
