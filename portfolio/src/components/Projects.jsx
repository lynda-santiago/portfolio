import React from "react";
import { projectsData } from "../data.js";

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects & More To Come. . .</h1>
      <div>
        {projectsData.map((item) => {
          return (
            <>
              <div></div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
