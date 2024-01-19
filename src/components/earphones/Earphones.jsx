import React from 'react'
import './earphone.css'
import data from "../../../data.json";
import PagesShop from '../pagesShop/PagesShop'
import ListeningToMusic from "../manListeningToMusic/ListeningToMusic";
import { useNavigate } from 'react-router-dom';


const Earphones = () => {
const navigate= useNavigate()

  const headphones = data?.sort((a, b) => b.id - a.id).slice(5);
  return (
    <section className="earphones">
    <div className="earphones__title">
      <h1>EARPHONES</h1>
    </div>
    <article className="earphones__list">
      {headphones?.map((data) => (
        <div key={data.id} className="earphones__item">
          <img
            className="earphones__images"
            src={data.image.desktop}
            alt=""
          />
          <div className="earphones__details">
            {data.new && <div className="earphones__badge">NEW PRODUCT</div>}
            <h2 className="earphones__name">{data.name}</h2>
            <p className="earphones__description">{data.description}</p>
            <button onClick={()=>{navigate(`/product/${data.name}`)}} className="earphones__button">See Product</button>
          </div>
        </div>
      ))}
    </article>
    <PagesShop />
    <ListeningToMusic />
  </section>
  )
}

export default Earphones