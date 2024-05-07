import React from "react";
import styles from "./Projects.module.css";

import projects from "./data/Data";

export default function Projects() {
 
  return (
    <div className={styles.container} id="project" title="Click on Explore button to get more Info">
      <div className={styles.projectHeading}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projectContainer}>
       
        {projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <img src={project.image} alt={project.title} />
            <div className={styles.projectInfo}>
              <span className={styles.projectTitle}>{project.title} 
              </span>
              <br />
              <button className={styles.exploreProjects}><a href={project.explore} target="_blank">Explore</a></button>
              <p>{project.description}</p>
              <p className={styles.projectTechnology}>{project.technologies.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
