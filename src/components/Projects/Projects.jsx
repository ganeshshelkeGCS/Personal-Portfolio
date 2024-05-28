import React from "react";
import styles from "./Projects.module.css";

import projects from "./data/Data";

export default function Projects() {
  return (
    <div
      className={styles.container}
      id="project"
      title="Click on Explore button to get more Info"
    >
      <div className={styles.projectHeading}>
        <h1>Projects</h1>
      </div>
      
<div className={styles.cardsContainer} >
      {projects.map((project, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.imageBox} >
            <img src={project.image} alt={project.title} />
          </div>
          <div className={styles.content}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.technologies.join(", ")}</p>
            <button className={styles.exploreProjects}><a href={project.explore} target="_blank">Explore</a></button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
