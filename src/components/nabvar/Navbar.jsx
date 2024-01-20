import React from "react";
import "./nabvar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
const navigate= useNavigate()


  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img onClick={()=>{ navigate('/')}} className="navbar__logo" src="./logotipo.svg" alt="" />
        <ul className="navbar__menu">
          <li onClick={()=>{ navigate('/')}} className="navbar__item">HOME</li>
          <li onClick={()=>{ navigate('/headphon')}} className="navbar__item">HEADPHONES</li>
          <li onClick={()=>{ navigate("/spekers")}} className="navbar__item">SPEAKERS</li>
          <li onClick={()=>{ navigate("/earphone")}} className="navbar__item">EARPHONES</li>
        </ul>
        <img className="navbar__cart" src="./shared/desktop/icon-cart.svg" alt="" />
      </div>
      <div className="navbar__line"></div>
    </nav>
  );
};

export default Navbar;
