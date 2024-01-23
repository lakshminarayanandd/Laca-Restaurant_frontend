import React from "react";
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Top Picks</h1>
          <p>
          Discover our culinary excellence with Top Picks – a curated selection of our chef's finest creations. Indulge in these standout dishes that have earned the hearts of our patrons, delivering a symphony of flavors in every bite. Elevate your dining experience with our tried-and-true favorites at LACA Madras.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;