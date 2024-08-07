import React, { useState, useEffect } from "react";
import WindImage from "../assets/images/wind.png";
import "./WindCard.css";
import axios from "axios";

function WindCard(props) {
  const apiKey = "ff4b41be54077fc82ce47fc4894362a7";

  const [data, setData] = useState();

  useEffect(() => {
    const city = props?.currentCity;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then(function (response) {
        setData(response.data);
        //console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props?.currentCity]);

  return (
    <div>
      <div
        data-aos="fade-right"
        className="weather-card"
        style={{
          width: "11rem",
          height: "13rem",
          borderRadius: "30px",
          marginLeft: "20%",
        }}
      >
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="text-center mt-5">
                <img src={WindImage} alt="weather-icon" width={50} />
              </div>
            </div>

            <div className="row mt-2">
              <h6
                className="card-text text-center mb-0"
                style={{ color: "white", fontSize: "38px" }}
              >
                {data?.wind.speed}
              </h6>
              <h6
                className="card-text text-center"
                style={{ color: "white", fontSize: "36px" }}
              >
                mph
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindCard;
