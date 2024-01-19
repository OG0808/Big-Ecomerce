import React from "react";
import "../ZX9speakerHome/ZX9speakerHome.css";

const ZX9speakerHome = () => {
  return (
    <section className="ZX9speakerHome">
    <div className="ZX9speakerHome__images">
      <img
        className="ZX9speakerHome__img"
        src="/home/desktop/image-speaker-zx9.png"
        alt=""
      />
      <img className="ZX9speakerHome__pattern" src="/home/desktop/pattern-circles.svg" alt="" /> 
    </div>
    <div className="ZX9speakerHome__content">
      <h2 className="ZX9speakerHome__title">ZX9 SPEAKER</h2>
      <p className="ZX9speakerHome__description">
        Upgrade to premium speakers that are phenomenally built to deliver
        truly remarkable sound.
      </p>
      <button className="ZX9speakerHome__button">SEE PRODUCT</button>
    </div>
  </section>
  );
};

export default ZX9speakerHome;
