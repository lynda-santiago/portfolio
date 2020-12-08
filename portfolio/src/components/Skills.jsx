import React from "react";
import { skillsData } from "../data";

function Skills() {
  return (
    <div className="skills-container" id="skills">
      <div className="grid">
        {skillsData.map((item) => {
          return (
            <div>
              <img src={item.img} alt="" />
              <h2>{item.title}</h2>
              <li>{item.skills.first}</li>
              <li>{item.skills.second}</li>
              <li>{item.skills.third}</li>
              <li>{item.skills.fourth}</li>
              <li>{item.skills.fifth}</li>
              <li>{item.skills.sixth}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
