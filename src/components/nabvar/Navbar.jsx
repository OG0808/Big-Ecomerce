import React from "react";
import "./nabvar.css";


const Navbar = () => {



  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img className="navbar__logo" src="./logotipo.svg" alt="" />
        <ul className="navbar__menu">
          <li className="navbar__item">HOME</li>
          <li className="navbar__item">HEADPHONES</li>
          <li className="navbar__item">SPEAKERS</li>
          <li className="navbar__item">EARPHONES</li>
        </ul>
        <img className="navbar__cart" src="./shared/desktop/icon-cart.svg" alt="" />
      </div>
      <div className="navbar__line"></div>
    </nav>
  );
};

export default Navbar;
