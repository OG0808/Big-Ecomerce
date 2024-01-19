import React from "react";
import "./headphones.css";
import data from "../../../data.json";
import PagesShop from '../pagesShop/PagesShop'
import ListeningToMusic from "../manListeningToMusic/ListeningToMusic";
import { useNavigate } from "react-router-dom";


const Headphones = () => {
  const headphones = data?.sort((a, b) => b.id - a.id).slice(2, 5);
  const navigate = useNavigate()

  return (
    <section className="headphones">
      <div className="headphones__title">
        <h1>HEADPHONES</h1>
      </div>
      <article className="headphones__list">
        {headphones?.map((data) => (
          <div key={data.id} className="headphones__item">
            <img
              className="headphones__images"
              src={data.image.desktop}
              alt=""
            />
            <div className="headphones__details">
              {data.new && <div className="headphones__badge">NEW PRODUCT</div>}
              <h2 className="headphones__name">{data.name}</h2>
              <p className="headphones__description">{data.description}</p>
              <button onClick={()=>{navigate(data.route)}} className="headphones__button">See Product</button>
            </div>
          </div>
        ))}
      </article>
      <PagesShop/>
      <ListeningToMusic/>
    </section>
  );
};

export default Headphones;
