import React from "react";
import {SiPluscodes} from 'react-icons/si'

function Header() {
  return (
    <div className="header-container">
      <div className="grid">
        <div>
          {/* <p>My Name is Lynda Santiago</p> */}
          <h3>
          <SiPluscodes className="codeLogo"/> I Am A Web Developer
            <br /> & UI Designer<SiPluscodes className="codeLogo"/>
          </h3>
          <p>
            “To be yourself in a world that is constantly trying to make you
            something else is the greatest accomplishment.”
            <br />― Ralph Waldo Emerson
          </p>
          <button>hire me</button>
        </div>

        <div className="img">
          <img src="https://i.imgur.com/MtOsXYn.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Header;
