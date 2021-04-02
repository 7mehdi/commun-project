import React from "react";
import "./subComponent.css";

const subComponent = ({ el }) => {
  return (
    <div className="childCard">
      <img className="flag" src={`${el.flag}`} alt="" />

      <div className="text">
        <h3>{el.name}</h3>
        <p>
          <span>Population: </span>
          {el.population}
        </p>
        <p>
          {" "}
          <span>Region: </span>
          {el.region}
        </p>
        <p>
          {" "}
          <span>Capital: </span>
          {el.capital}
        </p>
      </div>
    </div>
  );
};

export default subComponent;
