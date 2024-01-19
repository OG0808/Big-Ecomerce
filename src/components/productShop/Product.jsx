import React from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import ListeningToMusic from "../manListeningToMusic/ListeningToMusic";
import PagesShop from "../pagesShop/PagesShop";

const Product = () => {
  const { name } = useParams();

  const product = data.find((data) => data.name === name);
  console.log(product);
  return (
    <section className="product">
      <article className="product__container">
        <img
          className="product__image"
          src={product.image.desktop}
          alt={product.name}
        />

        <div className="product__details">
          <span className="product__tag">
            {product.new ? "NEW PRODUCT" : ""}
          </span>
          <h2 className="product__name">{product.name}</h2>
          <p className="product__description">{product.description}</p>
          <span className="product__price">$ {product.price} USD</span>

          <div className="product__quantity-controls">
            <div className="product__quantity-control">
              <button className="product__quantity-btn">-</button>
              <span className="product__quantity-count">0</span>
              <button className="product__quantity-btn">+</button>
            </div>
            <button className="product__add-to-cart-btn">add to cart</button>
          </div>
        </div>
      </article>

      <article className="product__features">
        <div className="product-features-feature">
          <h3>Features</h3>
          <p>{product.features}</p>
        </div>

        <div className="product__feature-item">
          <h3>in the box</h3>
          <div className="product__feature-content-list">
            {product.includes.map((data, index) => (
              <ul key={index}>
                <li>
                  <span className="product__feature-quantity">
                    {data.quantity}x
                  </span>
                  <span className="product__feature-items">{data.item}</span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </article>

      <article className="product__images">
        <div className="product__image">
          <div className="product__image-firstandsecond">
            <img src={product.gallery.first.desktop} alt="" />
            <img src={product.gallery.second.desktop} alt="" />
          </div>
          <img className="product__image-third" src={product.gallery.third.desktop} alt="" />
        </div>
      </article>

      <PagesShop />
      <ListeningToMusic />
    </section>
  );
};

export default Product;
