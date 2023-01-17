import React from "react";
import styles from "./NavBar.module.css";
import MX from "../../images/MX.png";

const NavBar = () => {
  return (
    <div>
      <div className={styles.containerNav}>
        <div className={styles.nav}>
          <a href="#landing">
            <div className={styles.logosebich}>
              <img src={MX} className={styles.miNombre} />
              <h2>Curriculum Vitae</h2>
            </div>
          </a>
          <nav className={styles.navBar}>
            <ul>
              <a href="#educacion">
                <li>Educación</li>
              </a>
              <a href="#experiencia">
                <li>Experiencia</li>
              </a>
              <a href="#portfolio">
                <li>Portfolio</li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
