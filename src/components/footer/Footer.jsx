import React from "react";
import logo from "/shared/desktop/logo.svg";
import facebook from "/shared/desktop/icon-facebook.svg";
import instagram from "/shared/desktop/icon-instagram.svg";
import twiter from "/shared/desktop/icon-twitter.svg";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">

      <article className="footer__block-icon">
        <img src={logo} alt="Logo" className="footer__logo" />
        <p className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <span className="footer__span">
          Copyright 2023. All Rights Reserved
        </span>
      </article>

      <article className="footer__block-social">
        <ul className="footer__list">
          <li className="footer__item">Home</li>
          <li className="footer__item">Headphones</li>
          <li className="footer__item">Speakers</li>
          <li className="footer__item">EARPHONES</li>
        </ul>
        <ul className="footer__list-icon">
          <img src={facebook} alt="icono facebook" />
          <img src={twiter} alt="icono twitter" />
          <img src={instagram} alt="icono instagram" />
        </ul>
      </article>
    </section>
  );
};

export default Footer;
