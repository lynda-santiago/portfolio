import React from "react";
import { projectsData } from "../data.js";
import { FcWorkflow } from "react-icons/fc";

function Projects() {
  return (
    <>
      <h1>
        MY <span>PROJECTS</span> <FcWorkflow />
      </h1>
      <div className="projects-container" id="projects">
        {projectsData.map((item) => {
          return (
            <>
              <div className="projects">
                <div>
                  <h2>{item.name}</h2>
                  <img
                    src={item.video}
                    alt="gif of project website"
                    className="media-only"
                  />
                  <p>{item.about}</p>
                  <h4>Date:</h4>
                  <p>{item.date}</p>

                  <h4>Github:</h4>
                  <p>
                    <a href={item.github} target="_blank" rel="noreferrer">
                      Github Link
                    </a>
                  </p>
                  <div className="box">
                    <h2 className="techTitle">Tech Stack Used</h2>
                    <p>{item.tech}</p>
                    <div className="iconContainer">
                      {item.name === "Anywhere Fitness App" ? (
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Laced Pro Sneaker App" ? (
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-256.png"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Laced Pro Sneaker App" ? (
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Laced Pro Sneaker App" ? (
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/sass-256.png"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Laced Pro Sneaker App" ? (
                        <img
                          src="https://material-ui.com/static/logo_raw.svg"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Laced Pro Sneaker App" ? (
                        <img
                          src="https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Chops-yo Food App" ? (
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-256.png"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Chops-yo Food App" ? (
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Chops-yo Food App" ? (
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/sass-256.png"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Chops-yo Food App" ? (
                        <img
                          src="https://material-ui.com/static/logo_raw.svg"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                      {item.name === "Anywhere Fitness App" ? (
                        <img
                          src="https://cdn3.iconfinder.com/data/icons/file-extension-11/512/css-file-extension-format-digital-256.png"
                          className="iconImage"
                          alt="tech icon"
                        />
                      ) : (
                        ""
                      )}{" "}
                    </div>
                  </div>
                </div>
                <div className="image">
                  <img
                    src={item.video}
                    alt="gif of project website"
                    className="desktop-only"
                  />
                  <div className="topSection">
                    {item.name === "Laced Pro Sneaker App" ? (
                      <a
                        href="https://lacedpro.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button>Visit Website</button>
                      </a>
                    ) : (
                      ""
                    )}{" "}
                    {item.name === "Anywhere Fitness App" ? (
                      <a
                        href="https://anywhere-fitness-getfit.netlify.app/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button>Visit Website</button>
                      </a>
                    ) : (
                      ""
                    )}{" "}
                    {item.name === "Chops-yo Food App" ? (
                      <a
                        href="https://chops.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button>Visit Website</button>
                      </a>
                    ) : (
                      ""
                    )}{" "}
                  </div>
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
