import React, { useEffect } from "react";
import "./ForecastCard.css";
import icon01d from "../assets/weather_icons/01d.png";
import icon01n from "../assets/weather_icons/01n.png";
import icon02d from "../assets/weather_icons/02d.png";
import icon02n from "../assets/weather_icons/02n.png";
import icon03d from "../assets/weather_icons/03d.png";
import icon03n from "../assets/weather_icons/03n.png";
import icon04d from "../assets/weather_icons/04d.png";
import icon04n from "../assets/weather_icons/04n.png";
import icon09d from "../assets/weather_icons/09d.png";
import icon09n from "../assets/weather_icons/09n.png";
import icon10d from "../assets/weather_icons/10d.png";
import icon10n from "../assets/weather_icons/10n.png";
import icon11d from "../assets/weather_icons/11d.png";
import icon11n from "../assets/weather_icons/11n.png";
import icon13d from "../assets/weather_icons/13d.png";
import icon13n from "../assets/weather_icons/13n.png";
import icon50d from "../assets/weather_icons/50d.png";
import icon50n from "../assets/weather_icons/50n.png";

function ForecastDay({ date, forecastData }) {
  function getMonth(month) {
    return month === "01"
      ? "Jan"
      : month === "02"
      ? "Feb"
      : month === "03"
      ? "Mar"
      : month === "04"
      ? "Apr"
      : month === "05"
      ? "May"
      : month === "06"
      ? "June"
      : month === "07"
      ? "July"
      : month === "08"
      ? "Aug"
      : month === "09"
      ? "Sep"
      : month === "10"
      ? "Oct"
      : month === "11"
      ? "Nov"
      : "Dec";
  }

  function getTime(time) {
    time = time.split(":")[0];
    return parseInt(time) >= 12 ? time + " PM" : time + " AM";
  }

  function getImage(imageId){
     return imageId === "01d" ? icon01d: imageId === "01n" ? icon01n: imageId === "02d" ? icon02d: imageId === "02n" ? icon02n: imageId === "03d" ? icon03d: imageId === "03n" ? icon03n: imageId === "04d" ? icon04d: imageId === "04n" ? icon04n: imageId === "09d" ? icon09d: imageId === "09n" ? icon09n: imageId === "10d" ? icon10d: imageId === "10n" ? icon10n: imageId === "11d" ? icon11d: imageId === "11n" ? icon11n: imageId === "13d" ? icon13d: imageId === "13n" ? icon13n: imageId === "50d" ? icon50d:icon50n;
  }

  function getTemp(temp){
        return Math.round(temp);
  }

  let todayForecast = [];

  function prepareDetails() {
    todayForecast = forecastData.list.filter((day) => {
      const todayDate = day.dt_txt.split(" ")[0];
      const yearOfToday = todayDate.split("-")[0];
      const monthOfToday = getMonth(todayDate.split("-")[1]);
      const dayOfToday = todayDate.split("-")[2];

      return (
        yearOfToday === date.year.toString() &&
        monthOfToday === date.month &&
        dayOfToday === date.day.toString()
      );
    });

    return todayForecast;
  }

  useEffect(() => {
    prepareDetails();
    console.log(todayForecast);
  }, [forecastData]);

  return (
    <div>
      {/* day start*/}
      <div className="row" style={{ marginLeft: "10%" }}>
        {/* Date */}
        <div className="row">
          <div
            className="col date"
            style={{ marginTop: "2%", marginLeft: "-51%", marginBottom: "2%" }}
          >
            <h4 className="text-white">
              {date.dayOfWeek + " " + date.day + " " + date.month}
            </h4>
          </div>
        </div>

        {/* Time row */}
        <div className="row" style={{ marginTop: "-2%", marginLeft: "15%" }}>
          {prepareDetails().map((todayDetails) => {
            return (
              <div className="col" style={{ marginLeft: "-44%", marginTop: "2%" }}>
                <p className="text-white">
                  {getTime(todayDetails.dt_txt.split(" ")[1])}
                </p>
              </div>
            );
          })}
        </div>

        {/* Icon row */}
        <div className="row" style={{ marginTop: "-2%", marginLeft: "15%" }}>
          {prepareDetails().map((todayDetails)=>{
             return (
                <div className="col" style={{ marginLeft: "-44%", marginTop: "2%" }}>
                    <img className="weather-img" src={getImage(todayDetails.weather[0].icon)} alt="" />
                </div>
             )
          })}
        </div>

        {/* weather description */}
        <div className="row" style={{ marginTop: "-1%", marginLeft: "15%" }}>
          {todayForecast.map((todayDetails)=>{
              return (
                <div className="col" style={{ marginLeft: "-44%", marginTop: "2%" }}>
                    <p className="temp" style={{fontSize:"1rem"}}>{todayDetails.weather[0].main}</p>
                </div>
              )
          })}
        </div>

        {/* Temperature row in celcius*/}
        <div className="row" style={{ marginTop: "-1%", marginLeft: "15%" }}>
          {todayForecast.map((todayDetails)=>{
              return (
                <div className="col" style={{ marginLeft: "-44%", marginTop: "2%" }}>
                    <p className="temp">{getTemp(todayDetails.main.temp)} &#8451;</p>
                </div>
              )
          })}
        </div>

      </div>

      {/* day end*/}
    </div>
  );
}

export default ForecastDay;
