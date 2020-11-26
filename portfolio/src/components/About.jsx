import React from "react";
import { laptop } from "../svgHelpers/svgVariables";

function About() {
  return (
    <div className="about-container">
      <div className="grid">
        <div>{laptop}</div>

        <div>
          <h1>About Me</h1>
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
    </div>
  );
}

export default About;
