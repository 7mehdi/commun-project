import React from "react";
import "./subComponent.css";

const subComponent = ({ el, history }) => {
  return (
    <div
      className="childCard"
      onClick={() => history.push(`/${el.name.common}`)}
    >
      <img className="flag" src={`${el.flags.png}`} alt="" />

      <div className="text">
        <h3>{el.name.common}</h3>
        <p>
          <span>Population: </span>
          {el.population} 🧍
        </p>
        <p>
          {" "}
          <span>Region: </span>
          {el.region}
        </p>
        <p>
          {" "}
          <span>Capital: </span>
          {console.log(el.capital)}
        </p>
      </div>
    </div>
  );
};

export default subComponent;
