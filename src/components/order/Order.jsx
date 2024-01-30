import { Navigate, useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import useCartShow from "../../store/useCartShow";
import "./order.css";

const Order = () => {
  const { setShowOrder } = useCartShow();
  const { cartProducts, totalPrice, clearCart  } = useCartStore();
  const navigate =useNavigate()

  const handleOrder = ()=>{
    navigate('/')
    setShowOrder(false)
    clearCart()
  }
  return (
    <>
      <div className="order"></div>
      <div className="order__item">
       
        <img className="order__logo" src="/checkout/icon-order-confirmation.svg" alt="" />
       
        <span className="order__title">THANK YOU FOR YOUR ORDER</span>
       
        <span className="order__badged">You will receive an email confirmation shortly.</span>
       
        <div className="order__product-total">
          <div className="order__products">
            {cartProducts.map((data) => (
              <div className="order__product" key={data.name}>
                <img src={data.image.mobile} alt="" />
                <div className="order__product-details">
                  <span className="order__product-name">{data.name}</span>
                  <span className="order__product-price">{data.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="order__total">
            <span className="order__total-label">Grand Total</span>
            <span className="order__total-amount">$ {totalPrice.toLocaleString()}</span>
          </div>
        </div>

        <button onClick={handleOrder} className="order__button">BACK TO HOME</button>
      </div>
    </>
  );
};

export default Order;
