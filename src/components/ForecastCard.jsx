import React, { useState, useEffect } from "react";
import "./ForecastCard.css";
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


function getMonth(month){
    return month === "01" ? "Jan": month === "02" ? "Feb": month === "03" ? "Mar": month === "04" ? "Apr": month === "05" ? "May": month === "06" ? "June": month === "07" ? "July": month === "08" ? "Aug": month === "09" ? "Sep": month === "10" ? "Oct": month === "11" ? "Nov": "Dec";
}

function ForecastCard(props) {

  const apiKey = "ff4b41be54077fc82ce47fc4894362a7";

  const [data, setData] = useState();

  useEffect(()=>{
    const city = props?.currentCity;
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
    .then(function(response){
      
      setData(response.data)
      console.log(response.data);
    
    })
    .catch(function(error){
      console.log(error);
    })
  },[props?.currentCity])

  return (
    <div className="container text-center">
      <div className="weather-card">

        {/* first day start*/}
        <div className="row" style={{marginLeft:"10%"}}>
          
          {/* Date */}
          <div className="row">
            <div className="col date" style={{marginTop:"2%"}}>
              <h4 className="text-white">11 {getMonth("03")}</h4>
            </div>
          </div>

          {/* Time row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">3 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 PM</p>
            </div>
          </div>

          {/* Icon row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon09d} alt="" />
            </div>
          </div>

          {/* Temperature row */}
          <div className="row" style={{marginTop:"-1%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>
          </div> 
        </div>
        
        {/* first day end*/}

        <hr className="mx-auto text-white" style={{ borderTop: "2px solid" }} width="90%"></hr>

        {/* second day start*/}
        <div className="row" style={{marginLeft:"10%"}}>
          
          {/* Date */}
          <div className="row">
            <div className="col date" style={{marginTop:"2%"}}>
              <h4 className="text-white">12 Mar</h4>
            </div>
          </div>

          {/* Time row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">3 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 PM</p>
            </div>
          </div>

          {/* Icon row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon09d} alt="" />
            </div>
          </div>

          {/* Temperature row */}
          <div className="row" style={{marginTop:"-1%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>
          </div> 
        </div>
        
        {/* second day end*/}

        <hr className="mx-auto text-white" style={{ borderTop: "2px solid" }} width="90%"></hr>


        {/* third day start*/}
        <div className="row" style={{marginLeft:"10%"}}>
          
          {/* Date */}
          <div className="row">
            <div className="col date" style={{marginTop:"2%"}}>
              <h4 className="text-white">12 Mar</h4>
            </div>
          </div>

          {/* Time row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">3 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 PM</p>
            </div>
          </div>

          {/* Icon row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon09d} alt="" />
            </div>
          </div>

          {/* Temperature row */}
          <div className="row" style={{marginTop:"-1%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>
          </div> 
        </div>
        
        {/* third day end*/}

        <hr className="mx-auto text-white" style={{ borderTop: "2px solid" }} width="90%"></hr>

        {/* fourth day start*/}
        <div className="row" style={{marginLeft:"10%"}}>
          
          {/* Date */}
          <div className="row">
            <div className="col date" style={{marginTop:"2%"}}>
              <h4 className="text-white">12 Mar</h4>
            </div>
          </div>

          {/* Time row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">3 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 PM</p>
            </div>
          </div>

          {/* Icon row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon09d} alt="" />
            </div>
          </div>

          {/* Temperature row */}
          <div className="row" style={{marginTop:"-1%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>
          </div> 
        </div>
        
        {/* fourth day end*/}

        <hr className="mx-auto text-white" style={{ borderTop: "2px solid" }} width="90%"></hr>

        {/* fifth day start*/}
        <div className="row mb-5" style={{marginLeft:"10%"}}>
          
          {/* Date */}
          <div className="row">
            <div className="col date" style={{marginTop:"2%"}}>
              <h4 className="text-white">12 Mar</h4>
            </div>
          </div>

          {/* Time row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 AM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">12 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">3 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">6 PM</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="text-white">9 PM</p>
            </div>
          </div>

          {/* Icon row */}
          <div className="row" style={{marginTop:"-2%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon01n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon02n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03d} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon03n} alt="" />
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <img className="weather-img" src={icon09d} alt="" />
            </div>
          </div>

          {/* Temperature row */}
          <div className="row" style={{marginTop:"-1%", marginLeft:"15%"}}>
            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
              <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>

            <div className="col" style={{marginLeft:"-44%", marginTop:"2%"}}>
            <p className="temp">25 &#8451;</p>
            </div>
          </div> 
        </div>
        
        {/* fifth day end*/}


        
        

        {/* <div className="row mt-4">
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
        ></hr> */}

      </div>
    </div>
  );
}

export default ForecastCard;
