import React from "react";
import {GiProgression} from 'react-icons/gi'

function About() {
  return (
    <div className="about-container">
      <div className="grid">
        <div>
          <img src="https://i.imgur.com/f8q7J78.png" alt="" />
        </div>

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
      <h1 className="skills">
        My skills can help your<br/> business <span>drive success</span><GiProgression className='logo' />
      </h1>
    </div>
  );
}

export default About;
