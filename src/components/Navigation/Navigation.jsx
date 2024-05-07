import React, {useState} from "react";
import styles from "./Navigation.module.css";

function Navigation() {
    const [activeSection, setActiveSection] = useState("");

    const handleClick = (sectionId) => {
        setActiveSection(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behaviour: "smooth"});
        }
    };
    return (
       <>
       
            <ul className={styles.container} id="home">
                <li className={styles.portfolioName}>
                    <a href="#Portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#home" onClick={ () => handleClick("home")}>Home</a>
                </li>
                <li>
                    <a href="#project" onClick={ () => handleClick("projects")}>Projects</a>
                </li>
                <li>
                    <a href="#about" onClick={() => handleClick("about")}>About</a>
                </li>
                <li>
                    <a href="#resume" onClick={() => handleClick("resume")}>Resume</a>
                </li>
                <li>
                    <a href="#contact" onClick={ () => handleClick("contact")}>Skills</a>
                </li>
                
            </ul>
            
         </>
    );
}

export default Navigation;