import React from "react";
import Photo from "../../images/profile_photo.png";
import Resume from "../Resume/Resume";

import styles from "./Profile.module.css";
import About from "../About/About";
import LinkedIn from "../../images/LinkedIn.png";
import GitHub from "../../images/gitHub.png";
import Gmail from "../../images/gmail.png"

export default function Profile() {
  return (
    <>
      <div className={styles.mainContainer} id="about">
            <span className={styles.leftContainer}>
              <About />
            </span>
            <div className={styles.rightContainer}>
              <img
                title="Profile Photo"
                src={Photo}
                alt="Image Photo"
                className={styles.photo}/>
            </div>
      </div>
      <div className={styles.BelowrightContainer} id="resume">
            <span>Hey I A'm Ganesh Shelke</span>
            <span className={styles.resume} title="Resume"> <Resume /></span>
           <span className={styles.contactIcomMain}>
            <span title="Send Mail"><a href="mailto:ganeshshelke785@gmail.com" className={styles.decoration1} target="_blank"><img src={Gmail} alt="ganeshshelke785@gmail.com" className={styles.contactIcon}/></a></span>
            <span title="GitHub"><a href="https://github.com/ganeshshelkeGCS" className={styles.decoration2} target="_blank"> <img src={GitHub} alt="Git-Hub" className={styles.contactIcon}/></a></span>
           <span title="LinkedIn"><a href="https://in.linkedin.com/in/ganesh-shelke-270773233" className={styles.decoration3} target="_blank"> <img src={LinkedIn} alt="LinkedIn" className={styles.contactIcon}/> </a></span>
           </span>
      </div>
    </>
  );
}
