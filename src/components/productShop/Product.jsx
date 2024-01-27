import "./product.css";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import ListeningToMusic from "../manListeningToMusic/ListeningToMusic";
import PagesShop from "../pagesShop/PagesShop";
import handleproductShop from "../../utils/handleproductShop";
import useScreenSize from "../../hooks/useScreenSize ";

const Product = () => {
  const { width } = useScreenSize();
  const { name } = useParams();
  const {
    hadleBack,
    setCheck,
    handleAddItem,
    handleDecreaseItem,
    handleSee,
    count,
    check,
  } = handleproductShop(name);
  5;
  const product = data.find((data) => data.name === name);

  return (
    <section className="product">
      <article className="product__container__back">
        <div className="product__back">
          <span onClick={hadleBack}>Go Back</span>
        </div>
        <div className="product__container">
          <img
            className="product__image"
            src={
              width > 768
                ? product?.image.desktop
                : width > 375
                ? product?.image.tablet
                : product?.image.mobile
            }
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
                  onClick={() => handleDecreaseItem(product?.id)}
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
            <img
              src={
                width > 768
                  ? product?.gallery.first.desktop
                  : width > 375
                  ? product?.gallery.first.tablet
                  : product?.gallery.first.mobile
              }
              alt=""
            />
            <img
              src={
                width > 768
                  ? product.gallery.second.desktop
                  : width > 375
                  ? product.gallery.second.tablet
                  : product.gallery.second.mobile
              }
              alt=""
            />
          </div>
          <img
            className="product__image-third"
            src={
              width > 768
                ? product.gallery.third.desktop
                : width > 375
                ? product.gallery.third.tablet
                : product.gallery.third.mobile
            }
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
