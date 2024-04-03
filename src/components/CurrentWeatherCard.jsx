import "./CurrentWeatherCard.css"
import { useState, useEffect } from "react";
import locationImage from '../assets/location-icon.png'
import axios from "axios";
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


export default function CurrentWeatherCard(props) {

  const apiKey = "ff4b41be54077fc82ce47fc4894362a7";

  const [data,setData] = useState();

  const[image,setImage] = useState(icon01d);

  useEffect(()=>{
    const city = props?.currentCity;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(function(response){
      
      setData(response.data)
      console.log(response.data);

      console.log(response.data.weather[0].icon);
    
      setImage(response.data.weather[0].icon === "01d" ? icon01d: response.data.weather[0].icon === "01n" ? icon01n: response.data.weather[0].icon === "02d" ? icon02d: response.data.weather[0].icon === "02n" ? icon02n: response.data.weather[0].icon === "03d" ? icon03d: response.data.weather[0].icon === "03n" ? icon03n: response.data.weather[0].icon === "04d" ? icon04d: response.data.weather[0].icon === "04n" ? icon04n: response.data.weather[0].icon === "09d" ? icon09d: response.data.weather[0].icon === "09n" ? icon09n: response.data.weather[0].icon === "10d" ? icon10d: response.data.weather[0].icon === "10n" ? icon10n: response.data.weather[0].icon === "11d" ? icon11d: response.data.weather[0].icon === "11n" ? icon11n: response.data.weather[0].icon === "13d" ? icon13d: response.data.weather[0].icon === "13n" ? icon13n: response.data.weather[0].icon === "50d" ? icon50d:icon50n);

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
                <img className="mb-3" src={image} alt="weather-icon" width={120}/>
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

            <hr className="mt-0" style={{ color: "white" }}></hr>

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
