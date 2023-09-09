import React ,{useEffect}from "react";
import "./subComponent.css";
import {motion} from 'framer-motion/dist/framer-motion'
const subComponent = ({ el, history }) => {
  return (
    <motion.div
      className="childCard"
      onClick={() => history.push(`/${el.ccn3}`)}
      initial={{y:'100%', opacity:'0'}}
      animate={{y:'0%' ,opacity:'1',transition :{duration: 0.05}}}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}

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
          {el.capital}
        </p>
      </div>
    </motion.div>
  );
};

export default subComponent;
