import "./CurrentWeatherCard.css"
import { useState, useEffect } from "react";



export default function CurrentWeatherCard(props) {
  
  return (
    <div className="container mb-5">
      <div
        className="weather-card"
        style={{ width: "21rem", height: "27rem", borderRadius: "30px", marginLeft:"-20%"}}
      >
        <div className="card-body">
          <div className="container">
            <div className="row">
              <h5 className="heading mt-2" style={{ color: "white" }}>
                <b>Now</b>
              </h5>
            </div>

            <div className="row">
              <div className="text-center mt-3">
                <img src="../assets/images/drizzle.png" alt="weather-icon" width={120}/>
              </div>
            </div>

            <div className="row">
              <h5 className="card-title text-center" style={{ color: "white" }}>
                
              </h5>
            </div>

            <div className="row mt-3">
              <h1
                className="card-text text-center"
                style={{ color: "white", fontSize: "80px" }}
              >
                 25 &#8451;
              </h1>
            </div>

            <hr style={{ color: "white" }}></hr>

            <div className="row">
              <div className="col-3">
                <img src="public/location-icon.png" alt="location-icon" />
              </div>
              <div className="col">
                <p>
                  
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
