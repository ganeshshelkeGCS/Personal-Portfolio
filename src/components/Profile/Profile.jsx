import React from "react";
import Photo from "../../images/profile_photo.png";
import Resume from "../Resume/Resume";

import styles from "./Profile.module.css";
import About from "../About/About";

export default function Profile() {
  return (
    <>
      <div className={styles.mainContainer} id="about">
        <div className={styles.about}>
          <About />
        </div>
        <div>
          <div className={styles.leftContainer}>
            <img title="Profile Photo" src={Photo} alt="Image Photo" className={styles.photo} />
          </div>
          <div className={styles.rightContainer} id="resume">
            <span>Hey I A'm Ganesh Shelke</span>
            <span title="Send Mail"><a href="mailto:ganeshshelke785@gmail.com" className={styles.decoration1} target="_blank">ganeshshelke785@gmail.com</a></span>
            <span title="GitHub"><a href="https://github.com/ganeshshelkeGCS" className={styles.decoration2} target="_blank">GitHub</a></span>
            <span title="LinkedIn"><a href="https://in.linkedin.com/in/ganesh-shelke-270773233" className={styles.decoration3} target="_blank">LinkedIn</a></span>
            <span className={styles.resume} title="Resume">
              <Resume />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
