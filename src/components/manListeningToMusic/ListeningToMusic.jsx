import React from "react";
import "../manListeningToMusic/ListeningToMusic.css";

const ListeningToMusic = () => {
  return (
    <section className="ListeningToMusic">
      <div className="ListeningToMusic__content">
        <h2 className="ListeningToMusic__title">Bringing you the <span className="ListeningToMusic__span">best</span> audio gear</h2>
        <p className="ListeningToMusic__description">
          Located at the heart of New York City, Audiophile is the premier store
          for high-end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="ListeningToMusic__image">
      </div>
    </section>
  );
};

export default ListeningToMusic;
