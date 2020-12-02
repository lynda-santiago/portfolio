import React, { useRef, useEffect } from "react";
import { SiPluscodes } from "react-icons/si";
import { TweenMax, Power3 } from "gsap";

function Header() {
  let item = useRef(null);
  let txt = useRef(null);

  useEffect(() => {
    TweenMax.to(item, 0.9, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    TweenMax.to(txt, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="header-container">
      <div className="grid">
        <div>
          <h3
            ref={(el) => {
              txt = el;
            }}
          >
            I'm A Web Developer
            <br /> & UI Designer
            <SiPluscodes className="codeLogo" />
          </h3>
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
          <img
            ref={(el) => {
              item = el;
            }}
            src="https://i.imgur.com/uYNbwYM.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
