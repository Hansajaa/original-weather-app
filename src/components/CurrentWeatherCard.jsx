import "./CurrentWeatherCard.css"
import { useState, useEffect } from "react";
import locationImage from '../assets/location-icon.png'
import axios from "axios";
import icon03d from '../assets/weather_icons/03d.png'

export default function CurrentWeatherCard(props) {

  const apiKey = "ff4b41be54077fc82ce47fc4894362a7";

  const [data,setData] = useState();

  
  useEffect(()=>{
    const city = props?.currentCity;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(function(response){
      
      setData(response.data)
      console.log(response.data);

    })
    .catch(function(error){
      console.log(error);
    })
  },[props?.currentCity])

  let currentTemp = Math.round(data?.main.temp);
  
  return (
    <div className="container">
      <div
        data-aos="fade-right"
        className="weather-card"
        style={{ width: "23rem", height: "25rem", borderRadius: "30px", marginLeft:"-20%"}}
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
                <img src={icon03d} alt="weather-icon" width={120}/>
                <p><b>{data?.weather[0].description}</b></p>
              </div>
            </div>

            <div className="row">
              <h5 className="card-title text-center" style={{ color: "white" }}>
                
              </h5>
            </div>

            <div className="row">
              <h1
                className="card-text text-center"
                style={{ color: "white", fontSize: "80px" }}
              >
                 {currentTemp} &#8451;
              </h1>
            </div>

            <hr style={{ color: "white" }}></hr>

            <div className="row">
              <div className="col-3">
                <img src={locationImage} alt="location-icon" />
              </div>
              <div className="col" style={{marginLeft:"-10%"}}>
                <p>
                  {data?.name+", "+data?.sys.country}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
