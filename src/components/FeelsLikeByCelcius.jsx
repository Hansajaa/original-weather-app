import React from "react";
import './FeelsLikeByCelcius.css'

function FeelsLikeByCelcius(props) {
  return (
    <div className="container" >
      <div
        className="weather-card"
        style={{
          width: "10rem",
          height: "15rem",
          borderRadius: "30px",
          marginLeft: "-20%",
        }}
      >
        <div className="card-body">
          <div className="container">

            <div className="row">
              <div className="text-center mt-5">
                <h4 className="text-white">Feels Like</h4>
              </div>
            </div>

            <div className="row mt-5">
              <h6
                className="card-text text-center"
                style={{ color: "white", fontSize: "40px" }}
              >
                30 &#8451;
              </h6>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelsLikeByCelcius;
