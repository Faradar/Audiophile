import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-cback`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Audiophile logo" />
        </div>

        <div className={styles.navigation}>
          <Link to="/">HOME</Link>
          <Link to="/category/headphones">HEADPHONES</Link>
          <Link to="/category/speakers">SPEAKERS</Link>
          <Link to="/category/earphones">EARPHONES</Link>
        </div>

        <div className={styles.description}>
          <p>
            Audiophile is an all-in-one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>

        <div className={styles.social}>
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </div>

        <div className={styles.copyright}>
          <p>Copyright 2021. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
