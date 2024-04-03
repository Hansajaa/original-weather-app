import React from "react";
import "./ForecastCard.css";
import icon01d from '../assets/weather_icons/01d.png'
import icon01n from '../assets/weather_icons/01n.png'
import icon02d from '../assets/weather_icons/02d.png'
import icon02n from '../assets/weather_icons/02n.png'
import icon03d from '../assets/weather_icons/03d.png'
import icon03n from '../assets/weather_icons/03n.png'
import icon04d from '../assets/weather_icons/04d.png'
import icon04n from '../assets/weather_icons/04n.png'
import icon09d from '../assets/weather_icons/09d.png'
import icon09n from '../assets/weather_icons/09n.png'
import icon10d from '../assets/weather_icons/10d.png'
import icon10n from '../assets/weather_icons/10n.png'
import icon11d from '../assets/weather_icons/11d.png'
import icon11n from '../assets/weather_icons/11n.png'
import icon13d from '../assets/weather_icons/13d.png'
import icon13n from '../assets/weather_icons/13n.png'
import icon50d from '../assets/weather_icons/50d.png'
import icon50n from '../assets/weather_icons/50n.png'

function ForecastCard(props) {
  return (
    <div className="container text-center">
      <div className="weather-card">
        <div className="row mt-4">
          <div className="col-4">
            <img className="weather-img" src={icon01d} alt="" />
          </div>
          <div className="col-4 mt-5">
            <b>
              <h2 className="text-white font-weight-bold">25 &#8451;</h2>
            </b>
          </div>
          <div className="col-4 mt-5">
            <b>
              <p>Tuesday</p>
            </b>
          </div>
        </div>
        <hr
          className="mx-auto text-white"
          style={{ borderTop: "2px solid" }}
          width="80%"
        ></hr>

        <div className="row">
          <div className="col-4">
            <img className="weather-img" src={icon02d} alt="" />
          </div>
          <div className="col-4 mt-5">
            <b>
              <h2 className="text-white font-weight-bold">25 &#8451;</h2>
            </b>
          </div>
          <div className="col-4 mt-5">
            <b>
              <p>Wednesday</p>
            </b>
          </div>
        </div>
        <hr
          className="w-90 mx-auto text-white"
          style={{ borderTop: "2px solid" }}
          width="80%"
        ></hr>

        <div className="row">
          <div className="col-4">
            <img className="weather-img" src={icon03d} alt="" />
          </div>
          <div className="col-4 mt-5">
            <b>
              <h2 className="text-white font-weight-bold">25 &#8451;</h2>
            </b>
          </div>
          <div className="col-4 mt-5">
            <b>
              <p>Thursday</p>
            </b>
          </div>
        </div>
        <hr
          className="w-90 mx-auto text-white"
          style={{ borderTop: "2px solid" }}
          width="80%"
        ></hr>

        <div className="row">
          <div className="col-4">
            <img className="weather-img" src={icon04d} alt="" />
          </div>
          <div className="col-4 mt-5">
            <b>
              <h2 className="text-white font-weight-bold">25 &#8451;</h2>
            </b>
          </div>
          <div className="col-4 mt-5">
            <b>
              <p>Friday</p>
            </b>
          </div>
        </div>
        <hr
          className="w-90 mx-auto text-white"
          style={{ borderTop: "2px solid" }}
          width="80%"
        ></hr>

        <div className="row mb-4">
          <div className="col-4">
            <img className="weather-img" src={icon09d} alt="" />
          </div>
          <div className="col-4 mt-5">
            <b>
              <h2 className="text-white font-weight-bold">25 &#8451;</h2>
            </b>
          </div>
          <div className="col-4 mt-5">
            <b>
              <p>Saturday</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
