import React from "react";
import "./YX1earphones.css";
import { useNavigate } from "react-router-dom";
import data from "../../../data.json";
const YX1earphones = () => {

  const product = data.slice(0, 1);
  
  
  
    const navigate = useNavigate();
  return (
    <section className="YX1earphones">
      <div className="YX1earphones__image"></div>
      <div className="YX1earphones__content">
        <h2 className="YX1earphones__title">YX1 EARPHONES</h2>
        <button   onClick={() => {
          navigate(`/product/${product[0].name}`);
        }} className="YX1earphones__button">See Product</button>
      </div>
    </section>
  );
};

export default YX1earphones;
