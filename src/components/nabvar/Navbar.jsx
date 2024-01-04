import React from "react";
import "../nabvar/nabvar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img className="navbar__logo" src="./src/assets/logotipo.svg" alt="" />
        <ul className="navbar__menu">
          <li className="navbar__item">HOME</li>
          <li className="navbar__item">HEADPHONES</li>
          <li className="navbar__item">SPEAKERS</li>
          <li className="navbar__item">EARPHONES</li>
        </ul>
        <img className="navbar__cart" src="./src/assets/shared/desktop/icon-cart.svg" alt="" />
      </div>
      <div className="navbar__line">linea</div>
    </nav>
  );
};

export default Navbar;
