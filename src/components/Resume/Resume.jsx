import React from "react";
import resume from "./Ganesh_Shelke_Resume.pdf";
import styles from "./Resume.module.css";

function Resume() {
  return (
    <>
      <div className={styles.resumeButton}>
        <a href={resume} download className={styles.resumeLink}>
          <button className={styles.resumeButton}>Download CV</button>
        </a>
      </div>
    </>
  );
}

export default Resume;
