import React from "react";
import { GiProgression } from "react-icons/gi";
import { SiPluscodes } from "react-icons/si";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="grid">
        <div>
          <img src="https://i.imgur.com/f8q7J78.png" alt="" />
        </div>

        <div>
          <h1>
            About Me <SiPluscodes className="codeLogo" />
          </h1>
          <p>
            Welcome to my website, My name is Lynda Santiago. I am a Web
            Developer & UI Designer who enjoys creating beautiful user friendly
            interfaces. I designed this website using Adobe XD and then coded it
            using React.js & Sass. I am constantly experimenting in new
            technologies and always striving to be a better web developer &
            designer. When I'm not coding or pushing pixels you'll find me meal
            prepping, exercising, watching scary movies, laughing, being goofy &
            spending time with my family.
          </p>
        </div>
      </div>

      <div className="skillsAndImage"><h1 className="skills">
        My skills can help your business <br />
        <span>drive success</span>
      </h1>
      <img src='https://i.imgur.com/3jbwyV2.png'/></div>
    </div>
  );
}

export default About;
