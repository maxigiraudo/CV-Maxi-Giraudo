import React from "react";
import styles from "./Footer.module.css";
import MX from "../../images/MX.png";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={styles.footerPadre}>
      <div>
        <img className={styles.logofinal} src={MX} alt="logo" />
      </div>
      <div className={styles.footer}>
        <div>
          <h2>Maximiliano Ezequiel Giraudo</h2>
          <p>Full Stack Developer</p>
        </div>
      </div>

      <p>
        {BiCopyright()}
        {"  "} Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
