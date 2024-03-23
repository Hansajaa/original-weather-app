import React from "react";
import WindImage from '../assets/images/wind.png'
import './WindCard.css'

function WindCard(props) {
  return (
    <div className="container" >
      <div
        data-aos="fade-right"
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
                <img src={WindImage} alt="weather-icon" width={50} />
              </div>
            </div>

            <div className="row mt-3">
              <h6
                className="card-text text-center"
                style={{ color: "white", fontSize: "40px" }}
              >
                2.2 mph
              </h6>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindCard;
