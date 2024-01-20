import React from "react";
import "./ZX7speakers.css";
import { useNavigate } from "react-router-dom";
import data from "../../../data.json";

const ZX7speakers = () => {
  const product = data.slice(4, 5);



  const navigate = useNavigate();
  return (
    <section className="ZX7speakers">
      <h2 className="ZX7speakers__title">ZX7 SPEAKER</h2>
      <button
        onClick={() => {
          navigate(`/product/${product[0].name}`);
        }}
        className="ZX7speakers__button"
      >
        SEE PRODUCT
      </button>
    </section>
  );
};

export default ZX7speakers;
