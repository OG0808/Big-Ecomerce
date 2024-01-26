import "./nabvar.css";
import useCartStore from "../../store/cartStore";
import useCartShow from "../../store/useCartShow";
import { handleSeeProduct } from "../../utils/handleSeeProduct";

const Navbar = () => {
  const { show, setShowCart } = useCartShow();

  const { cartProducts, clearCart, addItem, decreaseItem, totalPrice } =
    useCartStore();
  const { handleSeeShop } = handleSeeProduct();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__content-icon-logo">
          <img
            className="navbar__icon-menu"
            src="/shared/tablet/icon-hamburger.svg"
            alt=""
          />

          <img
            onClick={() => {
              handleSeeShop("/");
            }}
            className="navbar__logo"
            src="./logotipo.svg"
            alt=""
          />
        </div>
        <ul className="navbar__menu">
          <li
            onClick={() => {
              handleSeeShop("/");
            }}
            className="navbar__item"
          >
            HOME
          </li>
          <li
            onClick={() => {
              handleSeeShop("/headphon");
            }}
            className="navbar__item"
          >
            HEADPHONES
          </li>
          <li
            onClick={() => {
              handleSeeShop("/spekers");
            }}
            className="navbar__item"
          >
            SPEAKERS
          </li>
          <li
            onClick={() => {
              handleSeeShop("/earphone");
            }}
            className="navbar__item"
          >
            EARPHONES
          </li>
        </ul>
        <img
          onClick={() => {
            setShowCart(!false);
          }}
          className="navbar__cart"
          src="./shared/desktop/icon-cart.svg"
          alt=""
        />
      </div>
      <div className="navbar__line"></div>

      <div className={show ? "cartBackgound" : ""}></div>
      <section className={show ? "cart" : "cartHiden"}>
        <div className="cart__container">
          <h3 className="cart__title">
            {`Cart (${cartProducts.length})`}
            <span className="cart__clear" onClick={clearCart}>
              Remove all
            </span>
          </h3>

          {cartProducts?.map((data) => (
            <div key={data.id} className="cart__product">
              <img
                className="cart__product__image"
                src={data.image?.mobile}
                alt=""
              />
              <div className="cart__product__info">
                <span className="cart__product__name">{data.name}</span>
                <span className="cart__product__price">$ {data.price}</span>
              </div>
              <div className="cart__product__quantity">
                <div className="cart__quantity__control">
                  <button
                    onClick={() => decreaseItem(data?.id)}
                    className="cart__quantity__btn quantity__btn--decrease"
                  >
                    -
                  </button>
                  <span className="cart__quantity__count">{data.quantity}</span>
                  <button
                    onClick={() => addItem(data)}
                    className="cart__quantity__btn quantity__btn--increase"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__total-price">
          <span className="cart__total">TOTAL</span>
          <span>${totalPrice}</span>
        </div>
        <button
          onClick={() => {
            handleSeeShop("/checkout");
            setShowCart(!false);
          }}
          className="cart__checkout"
        >
          checkout
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
