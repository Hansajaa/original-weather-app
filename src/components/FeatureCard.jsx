import React from "react";
import cloudsImage from '../assets/images/clouds.png'

function FeatureCard(props) {
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
              <div className="text-center mt-3">
                <img src={cloudsImage} alt="weather-icon" width={120} />
              </div>
            </div>

            <div className="row">
              <h5
                className="card-title text-center"
                style={{ color: "white" }}
              ></h5>
            </div>

            <div className="row mt-3">
              <h1
                className="card-text text-center"
                style={{ color: "white", fontSize: "40px" }}
              >
                25 &#8451;
              </h1>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
