import React,{useState, useEffect} from "react";
import './FeelsLikeByCelcius.css'
import axios from "axios";

function FeelsLikeByCelcius(props) {

  const apiKey = "ff4b41be54077fc82ce47fc4894362a7";

  const [data,setData] = useState();

  
  useEffect(()=>{
    const city = props?.currentCity;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(function(response){
      
      setData(response.data)
      //console.log(response.data);

    })
    .catch(function(error){
      console.log(error);
    })
  },[props?.currentCity])

  let feelsLike = Math.round(data?.main.feels_like);

  return (
    <div >
      <div
        data-aos="fade-right"
        className="weather-card"
        style={{
          width: "11rem",
          height: "13rem",
          borderRadius: "30px",
          marginLeft: "27%",
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
                {feelsLike} &#8451;
              </h6>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelsLikeByCelcius;
