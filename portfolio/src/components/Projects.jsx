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
              <div className="topSection">
                {item.name === "Laced Pro" ? (
                  <button>Visit Website</button>
                ) : (
                  <a
                    href="https://anywhere-fitness-getfit.netlify.app/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Visit Website</button>
                  </a>
                )}{" "}
              </div>

              <div className="projects">
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.about}</p>
                  <h4>Date:</h4>
                  <p>{item.date}</p>

                  <h4>Github:</h4>
                  <p>{item.github}</p>
                  <div className="box">
                    <h2 className="techTitle">Tech Stack Used</h2>
                    <p>{item.tech}</p>
                    {item.name === "Laced Pro" ? (
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-256.png"
                        className="iconImage"
                        alt="tech icon"
                      />
                    ) : (
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png"
                        className="iconImage"
                        alt="tech icon"
                      />
                    )}{" "}
                    {item.name === "Laced Pro" ? (
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png"
                        className="iconImage"
                        alt="tech icon"
                      />
                    ) : (
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/file-extension-11/512/css-file-extension-format-digital-256.png"
                        className="iconImage"
                        alt="tech icon"
                      />
                    )}{" "}
                    {item.name === "Laced Pro" ? (
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/sass-256.png"
                        className="iconImage"
                        alt="tech icon"
                      />
                    ) : (
                      ""
                    )}{" "}
                    {item.name === "Laced Pro" ? (
                      <img
                        src="https://material-ui.com/static/logo_raw.svg"
                        className="iconImage"
                        alt="tech icon"
                      />
                    ) : (
                      ""
                    )}{" "}
                    {item.name === "Laced Pro" ? (
                      <img
                        src="https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png"
                        className="iconImage"
                        alt="tech icon"
                      />
                    ) : (
                      ""
                    )}{" "}
                  </div>
                </div>
                <div className="image">
                  <img src={item.video} alt="gif of project website" />
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
