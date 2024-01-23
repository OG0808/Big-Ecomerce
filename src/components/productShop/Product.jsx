import React, { useEffect, useState } from "react";
import "./product.css";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../../data.json";
import ListeningToMusic from "../manListeningToMusic/ListeningToMusic";
import PagesShop from "../pagesShop/PagesShop";
import { handleSeeProduct } from "../../utils/handleSeeProduct";
import useCartStore from "../../store/cartStore";

const Product = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const product = data.find((data) => data.name === name);
  const { addItem, decreaseItem} = useCartStore();
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false)

  useEffect(() => {
    setCount(0);
  }, [name, check]);

  const handleAddItem = (product) => {
    setCount(count + 1);
    addItem(product);
  };

  const handleDecreaseItem = (product) => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      decreaseItem(product);
    }
  };

  const hadleBack = () => {
    if (name === "XX99 Mark II Headphones") navigate("/headphon");
    if (name === "XX99 Mark I Headphones") navigate("/headphon");
    if (name === "XX59 Headphones") navigate("/headphon");
    if (name === "ZX9 Speaker") navigate("/spekers");
    if (name === "ZX7 Speaker") navigate("/spekers");
    if (name === "YX1 Wireless Earphones") navigate("/earphone");
  };

  const { handleSee } = handleSeeProduct();
  return (
    <section className="product">
      <div className="product__back">
        <span onClick={hadleBack}>Go Back</span>
      </div>
      <article className="product__container">
        <img
          className="product__image"
          src={product?.image.desktop}
          alt={product?.name}
        />

        <div className="product__details">
          <span className="product__tag">
            {product?.new ? "NEW PRODUCT" : ""}
          </span>
          <h2 className="product__name">{product?.name}</h2>
          <p className="product__description">{product?.description}</p>
          <span className="product__price">$ {product?.price} USD</span>

          <div className="product__quantity-controls">
            <div className="product__quantity-control">
              <button
                onClick={() => handleDecreaseItem(product?.id )}
                className="product__quantity-btn"
              >
                -
              </button>
              <span className="product__quantity-count">{count}</span>
              <button
                onClick={() => handleAddItem(product)}
                className="product__quantity-btn"
              >
                +
              </button>
            </div>
            <button
              onClick={() => setCheck(!check)}
              className="product__add-to-cart-btn"
            >
              add to cart
            </button>
          </div>
        </div>
      </article>

      <article className="product__features">
        <div className="product-features-feature">
          <h3>Features</h3>
          <p>{product?.features}</p>
        </div>

        <div className="product__feature-item">
          <h3>in the box</h3>
          <div className="product__feature-content-list">
            {product?.includes.map((data, index) => (
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
            <img src={product?.gallery.first.desktop} alt="" />
            <img src={product?.gallery.second.desktop} alt="" />
          </div>
          <img
            className="product__image-third"
            src={product?.gallery.third.desktop}
            alt=""
          />
        </div>
      </article>

      <article className="other__product">
        <h3 className="other__product-title">You may also like</h3>
        <div className="other__product-list">
          {product?.others.map((others) => (
            <div key={others.name} className="other__product-item">
              <img
                src={others.image.desktop}
                alt={others.name}
                className="other__product-image"
              />
              <span className="other__product-name">{others.name}</span>
              <button
                onClick={() => {
                  handleSee(others.name);
                }}
                className="other__product-button"
              >
                See Product
              </button>
            </div>
          ))}
        </div>
      </article>

      <PagesShop />
      <ListeningToMusic />
    </section>
  );
};

export default Product;
