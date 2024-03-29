
import React from "react";
import "./header.css";
import Data from "../../../data.json";

import { handleSeeProduct } from "../../utils/handleSeeProduct";

const Header = () => {
  const targetId = 4;
  const products = Data.find((data) => data.id === targetId);
  const product = [products];
  const productName = Data.slice(3, 4);

  const{handleSee}=handleSeeProduct()

  return (
    <section className="header">
      <article className="header__content">
        {product.map((headphone) => (
          <div key={headphone.id} className="header__new-product">
            <p className="header__new-product-text">NEW PRODUCT</p>
            <h1 className="header__title">{headphone.name.toUpperCase()}</h1>
            <p className="header__description">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
        ))}
        <button onClick={()=>{handleSee(`${productName[0].name}`)}} className="header__button">See Product</button>
      </article>
    </section>
  );
};

export default Header;
