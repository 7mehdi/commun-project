import React from "react";
import "./Principal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SubComponent from "./subComponent";
import { useHistory, useLocation } from "react-router-dom";
const Principal = () => {
  const [data, setdata] = useState();
  const [words, setwords] = useState("");
  const [region, setregion] = useState("ALL");
  const history = useHistory();
  const location = useLocation();
  async function getData() {
    let data = await axios.get("https://restcountries.com/v3.1/all");
    
    const finalData=data.data
    setdata(finalData)
    console.log(finalData)
   
  }
  
 
  useEffect(() => {
    getData();
  }, []);
  return (
    <div location={location}>
      <section>
        <div className="inputAndOption">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <button
              className="searchBtn"
              onClick={() => {
                console.log(words);
              }}
            >
              <i className="fas fa-search"></i>
            </button>
            <input
              className="input"
              type="text"
              placeholder="Search for a country..."
              onChange={(e) => setwords(e.target.value)}
              value={words}
            />
          </form>
          <div className="option">
            <p>Select by region:</p>
            <select onChange={(e) => setregion(e.target.value)}>
              <option value="ALL">ALL</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div className="card">
          {region&&
            data &&
            data.filter((elem) =>
            elem.name.common.toUpperCase().includes(words.toUpperCase())
          )
          .filter((el) => {
            if (region === "ALL") return true;
            return el.region === region;
          }).map((el) => {
                return <SubComponent history={history} el={el} key={el.name} />;
                
              })}
        </div>
      </section>
    </div>
  );
};

export default Principal;
