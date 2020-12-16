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
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "40px" }}
          >
            <a
              href="https://drive.google.com/file/d/15Gi42JfvbuRGpAb1eZfsdnVFvr2GeDcX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button className="resumeBtn">Resume</button>
            </a>
            <a href="#contact">
              <button>hire me</button>
            </a>
          </div>
        </div>

        <div className="img">
          <img src="https://i.imgur.com/So9di4v.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Header;
