import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./checkout.css";
import { validationSchema } from "../validation/Validation";
import useCartStore from "../../store/cartStore";

const Checkout = () => {
  const { cartProducts, totalPrice } = useCartStore();
  const iva = (totalPrice * 20) / 100;
  const GrandTotal = totalPrice + 50;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      Name: "Alexei Ward",
      email: "alexei@mail.com",
      phone_number: "+12025550136",
      address: "1137 Williams Avenue",
      ZipCode: "10001",
      City: "New York",
      Country: "United States",
      payment_method: "e-Money",
      e__moneyNumber: "238521993",
      e__moneyPing: "6891",
    },
  });

  const Submit = (data) => {};

  return (
    <section className="checkout">
      <form
        onSubmit={handleSubmit(Submit)}
        className="formulario formulario--checkout"
      >
        <div className="container__form">
          <div className="formulario__group">
            <p className="formulario__title">Billing Details</p>
            <div className="formulario__field">
              <div className="formulario__subfield">
                <div className="errors">
                  <span className="formulario__label">Name</span>
                  {errors.Name && (
                    <p className="error"> {errors.Name?.message}</p>
                  )}
                </div>
                <input
                  {...register("Name")}
                  placeholder="Alexei Ward"
                  className="formulario__input"
                  type="text"
                />
              </div>

              <div className="formulario__subfield">
                <div className="errors">
                  <span className="formulario__label">Email Address</span>
                  {errors.email && (
                    <p className="error">{errors.email?.message}</p>
                  )}
                </div>
                <input
                  {...register("email")}
                  placeholder="alexei@mail.com"
                  className="formulario__input"
                  type="email"
                />
              </div>
            </div>

            <div className="formulario__field">
              <div className="formulario__subfield">
                <div className="errors">
                  <span className="formulario__label">Phone Number</span>
                  {errors.phone_number && (
                    <p className="error">{errors.phone_number?.message}</p>
                  )}
                </div>
                <input
                  {...register("phone_number")}
                  placeholder="+1 202-555-0136"
                  className="formulario__input"
                  type="tel"
                  inputMode="numeric"
                />
              </div>
            </div>
          </div>

          <div className="formulario__group1">
            <p className="formulario__title">shipping info</p>
            <div className="formulario__subfield">
              <div className="errors">
                <span className="formulario__label">Address</span>
                {errors.address && (
                  <p className="error"> {errors.address?.message}</p>
                )}
              </div>
              <input
                className="formulario__inputbig"
                {...register("address")}
                placeholder="1137 Williams Avenue"
                type="text"
              />
            </div>
            <div className="formulario__field">
              <div className="formulario__subfield">
                <div className="errors">
                  <span className="formulario__label">ZIP Code</span>
                  {errors.ZipCode && (
                    <p className="error"> {errors.ZipCode?.message}</p>
                  )}
                </div>
                <input
                  {...register("ZipCode")}
                  placeholder="10001"
                  className="formulario__input"
                  type="text"
                />
              </div>

              <div className="formulario__subfield">
                <div className="errors">
                  <span className="formulario__label">City</span>
                  {errors.City && (
                    <p className="error">{errors.City?.message}</p>
                  )}
                </div>
                <input
                  {...register("City")}
                  placeholder="New York"
                  className="formulario__input"
                  type="text"
                />
              </div>
            </div>

            <div className="formulario__field">
              <div className="formulario__subfield">
                <div className="errors">
                  <span className="formulario__label">Country</span>
                  {errors.Country && (
                    <p className="error">{errors.Country?.message}</p>
                  )}
                </div>
                <input
                  {...register("Country")}
                  placeholder="United States"
                  className="formulario__input"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="formulario__grupo2">
            <p className="formulario__title">payment details</p>
            <div className="formulario__field2">
              <span className="formulario__label">Payment Method</span>
              <div className="formulario__subfield">
                <div className="formulario__input checkbox">
                  <input
                    {...register("payment_e-Money")}
                    className="checkbox__input"
                    type="radio"
                  />
                  <span className="formulario__label">e-Money</span>
                </div>
                <div className="formulario__input checkbox">
                  <input
                    {...register("payment_Cash")}
                    className="checkbox__input"
                    type="radio"
                  />
                  <span className="formulario__label">Cash on Delivery</span>
                </div>
              </div>
            </div>

            <div className="formulario__field">
              <div className="formulario__subfield">
                <div className="errors">
                  <span className="formulario__label">e-Money Number</span>
                  {errors.e__moneyNumber && (
                    <p className="error"> {errors.e__moneyNumber?.message}</p>
                  )}
                </div>
                <input
                  {...register("e__moneyNumber")}
                  placeholder="238521993"
                  className="formulario__input"
                  type="text"
                />
              </div>

              <div className="formulario__subfield">
                <div className="errors">
                  <span className="formulario__label">e-Money PIN</span>
                  {errors.e__moneyPing && (
                    <p className="error">{errors.e__moneyPing?.message}</p>
                  )}
                </div>
                <input
                  {...register("e__moneyPing")}
                  placeholder="6891"
                  className="formulario__input"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        <article className="sumary">
          <div className="suamry__products">
            <p className="sumary__title">summary</p>
            <div className="suamry__container-product">
              {cartProducts?.map((data) => (
                <div className="suamry__product" key={data?.id}>
                  <img src={data.image?.desktop} alt="" />
                  <div className="sumary__namePrice">
                    <span className="sumary__name">{data.name}</span>
                    <span className="sumary__price">$ {data.price}</span>
                  </div>
                  <span>x{data.quantity}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sumary__total">
            <div>
              <span className="suamry__valors-description">Toal</span>{" "}
              <span className="sumary__valors">$ {totalPrice}</span>
            </div>
            <div>
              <span className="suamry__valors-description">SHIPPING</span>{" "}
              <span className="sumary__valors">$ 50</span>
            </div>
            <div>
              <span className="suamry__valors-description">VAT (INCLUDED)</span>
              <span className="sumary__valors">$ {iva}</span>
            </div>
            <div>
              <span className="suamry__valors-description">GRAND TOTAL</span>{" "}
              <span className="sumary__valors grandTotal">$ {GrandTotal}</span>
            </div>

            <button type="submit" className="suamry__btn">
              CONTINUE & PAY
            </button>
          </div>
        </article>
      </form>
    </section>
  );
};

export default Checkout;
