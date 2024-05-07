import React from "react";
import "./Skills.css";

function Contact() {
  const progress = [
    {
      language: "HTML",
      percentage: "90%",
    },

    {
      language: "CSS",
      percentage: "70%",
    },

    {
      language: "ReactJS",
      percentage: "50%",
    },

    {
      language: "JavaScript",
      percentage: "70%",
    },

    {
      language: "Java",
      percentage: "50%",
    },

    {
      language: "MySql",
      percentage: "60%",
    },

    {
      language: "GitHub",
      percentage: "55%",
    },
  ];
  return (
    <>
      <div className="mainContainer">
        <h1 className="contactHeading" id="contact">
          Skills
        </h1>

        {progress.map((prog, index) => (
          <div className="mainDiv">
            <div className="left" key={index}>
              {prog.language}
            </div>
            <div className="right">
              <div className="container">
                <div className="skills html" style={{width:prog.percentage}}>{prog.percentage}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Contact;
