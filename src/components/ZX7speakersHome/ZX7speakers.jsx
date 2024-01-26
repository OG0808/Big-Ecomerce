import React from "react";
import "./ZX7speakers.css";

import data from "../../../data.json";
import { handleSeeProduct } from "../../utils/handleSeeProduct";

const ZX7speakers = () => {
  const product = data.slice(4, 5);

  const{handleSee}=handleSeeProduct()



  return (
    <section className="ZX7speakers">
      <h2 className="ZX7speakers__title">ZX7 SPEAKER</h2>
      <button
        onClick={() => {
          handleSee(`${product[0].name}`);
        }}
        className="ZX7speakers__button"
      >
        SEE PRODUCT
      </button>
    </section>
  );
};

export default ZX7speakers;
