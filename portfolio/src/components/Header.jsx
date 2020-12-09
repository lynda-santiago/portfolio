import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="grid">
        <div>
          <p>My Name Is Lynda Santiago</p>
          <h3>I Am A Web Developer</h3>
          <p>
            “To be yourself in a world that is constantly trying to make you
            something else is the greatest accomplishment.”
            <br />― Ralph Waldo Emerson
          </p>
          <a href="#contact">
            <button>hire me</button>
          </a>
        </div>

        <div className="img">
          <img src="https://i.imgur.com/So9di4v.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Header;
