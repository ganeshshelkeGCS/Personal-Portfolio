import React from "react";
import styles from "./About.module.css";

import Photo from "../../images/image1.png";


function About() {
  return (
    <>
      <div className={styles.aboutInfo}>
          <p className={styles.aboutInfoP}>
            Aspiring React.js Developer Greetings! I am Ganesh Shelke, a
            passionate and dedicated individual stepping into the world of web
            development with a focus on React.js
          </p>
      </div>
    </>
  );
}

export default About;
