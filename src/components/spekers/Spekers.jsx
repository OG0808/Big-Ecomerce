import React from 'react'
import './spekers.css'
import data from "../../../data.json";
import PagesShop from '../pagesShop/PagesShop'
import ListeningToMusic from "../manListeningToMusic/ListeningToMusic";

const Spekers = () => {
  
  const headphones = data?.sort((a, b) => b.id - a.id).slice(0, 2);


  return (
    <section className="speakers">
    <div className="speakers__title">
      <h1>SPEAKERS</h1>
    </div>
    <article className="speakers__list">
      {headphones?.map((data) => (
        <div key={data.id} className="speakers__item">
          <img
            className="speakers__images"
            src={data.image.desktop}
            alt=""
          />
          <div className="speakers__details">
            {data.new && <div className="speakers__badge">NEW PRODUCT</div>}
            <h2 className="speakers__name">{data.name}</h2>
            <p className="speakers__description">{data.description}</p>
            <button className="speakers__button">See Product</button>
          </div>
        </div>
      ))}
    </article>
    <PagesShop />
    <ListeningToMusic />
  </section>
  )
}

export default Spekers