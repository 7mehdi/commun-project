import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Detaile.css";
import { useHistory } from "react-router-dom";
const Detaile = () => {
  const [data, setdata] = useState();
  const [theme, setTheme] = useState("white");
  const name = useParams();
  const history = useHistory();
  const getData = async () => {
    const { data } = await axios
      .get(` https://restcountries.com/v3.1/name/${name.name}`)
      .catch((err) => console.log("Error", err));
    let finalData = data[0];
    setdata(finalData);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={theme}>
      <body>
        <div
          style={{ paddingLeft: "10px", marginBottom: "50px " }}
          className="btn"
        >
          <button onClick={() => history.goBack()}>
            <i
              style={{ paddingRight: "15px" }}
              className="fas fa-arrow-left"
            ></i>
            Back
          </button>
        </div>
        <div className="container  ">
          <div className="Flag">
            {data && (
              <img
                src={`${data.flags.png}`}
                alt="kk"
                width="500px"
                height="auto"
              />
            )}
          </div>

          {data && (
            <div className="information ">
              <h3> {`${data.name.official}`} </h3>
              <div className="info">
                <ul>
                  <li>
                    <h6>
                      {" "}
                      Native Name:{" "}
                      {`${
                        Object.values(data.name.nativeName)[0].official
                      }`}{" "}
                    </h6>
                  </li>
                  <li>
                    <h6> Population: {`${data.population}`} 🧍 </h6>
                  </li>
                  <li>
                    <h6> Region : {`${data.region}`} </h6>
                  </li>
                  <li>
                    <h6> Sub-region : {`${data.subregion}`} </h6>
                  </li>
                  <li>
                    <h6> capital : {`${data.capital}`} </h6>
                  </li>
                

                <li>
                  <h6>
                    {" "}
                    Currencies :{" "}
                    {`${Object.values(data.currencies)[0].name}(${
                      Object.values(data.currencies)[0].symbol
                    })`}{" "}
                  </h6>
                </li>
                <li>
                  <h6> Languages : {`${Object.values(data.languages)[0]}`} </h6>
                </li>
                <li>
                  <h6>
                    border countries :
                    {data.borders &&
                      data.borders.map((elem) => {
                        return <span> {`${elem}   `}</span>;
                      })}
                  </h6>
                </li></ul>
              </div>
            </div>
          )}
        </div>
      </body>
    </div>
  );
};

export default Detaile;
