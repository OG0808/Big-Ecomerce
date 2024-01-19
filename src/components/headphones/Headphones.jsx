import React from "react";
import "./headphones.css";
import data from "../../../data.json";

const Headphones = () => {
  const headphones = data?.sort((a, b) => b.id - a.id).slice(2, 5);



  return (
    <section className="headphones">
      <div className="title">
        <h1>HEADPHONES</h1>
      </div>

      <article>
        {headphones?.map((data) => (
          <div key={data.id}>
           <img className="headphones__images" src={data.image.desktop} alt="" />
            <div>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <button>See Product</button>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Headphones;
