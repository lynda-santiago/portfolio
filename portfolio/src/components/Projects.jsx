import React from "react";
import { projectsData } from "../data.js";

function Projects() {
  return (
    <>
      <h1>My Projects & More To Come. . .</h1>

      <div className="projects-container">
        {projectsData.map((item) => {
          return (
            <>
              <div className="projects">
                <img src={item.video} alt="gif of project website" />
                <div>
                  <div className="projectTitles">
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                  </div>

                  
                    <h3>About:</h3>
                    <p>{item.about}</p>{" "}
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
