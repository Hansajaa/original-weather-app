import "./CurrentWeatherCard.css"
import { useState, useEffect } from "react";
import cloudsImage from '../assets/images/clouds.png'
import locationImage from '../assets/location-icon.png'
import axios from "axios";

export default function CurrentWeatherCard(props) {

  const apiKey = "5ffcc797bd1c4bc4b3730517242502";

  const [data,setData] = useState();

  
  useEffect(()=>{
    const city = props?.currentCity;
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(function(response){
      
      setData(response.data)
      console.log(response.data);

    })
    .catch(function(error){
      console.log(error);
    })
  },[props?.currentCity])

  let currentTemp = Math.round(data?.current.temp_c);
  
  return (
    <div className="container">
      <div
        data-aos="fade-right"
        className="weather-card"
        style={{ width: "19rem", height: "25rem", borderRadius: "30px", marginLeft:"-20%"}}
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
                <img src={data?.current.condition.icon} alt="weather-icon" width={120}/>
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
                 {currentTemp} &#8451;
              </h1>
            </div>

            <hr style={{ color: "white" }}></hr>

            <div className="row">
              <div className="col-3 mt-3">
                <img src={locationImage} alt="location-icon" />
              </div>
              <div className="col mt-3" style={{marginLeft:"-10%"}}>
                <p>
                  {data?.location.name+", "+data?.location.region+", "+data?.location.country}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
