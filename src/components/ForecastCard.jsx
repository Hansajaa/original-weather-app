import React, { useState, useEffect, useReducer } from "react";
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
import ForecastDay from "./ForecastDay";


function getMonth(month){
    return month === 0 ? "Jan": month === 1 ? "Feb": month === 2 ? "Mar": month === 3 ? "Apr": month === 4 ? "May": month === 5 ? "June": month === 6 ? "July": month === 7 ? "Aug": month === 8 ? "Sep": month === 9 ? "Oct": month === 10 ? "Nov": "Dec";
}

function getDayOfWeek(dayOfWeek){
    return dayOfWeek === 0 ? "Sun": dayOfWeek === 1 ? "Mon": dayOfWeek === 2 ? "Tue": dayOfWeek === 3 ? "Wed": dayOfWeek === 4 ? "Thu": dayOfWeek === 5 ? "Fri":"Sat";
}

const ACTION = {
    DAY_ONE : "day-one",
    DAY_TWO : "day-two",
    DAY_THREE : "day-three",
    DAY_FOUR : "day-four",
    CLEAR_DATES : "clear-dates"
}

function reducer(dates, action){
    switch(action.type){
        case ACTION.CLEAR_DATES : 
            return [];
        case ACTION.DAY_ONE : 
            return [...dates, newDate(action.payload.id, action.payload.date.getFullYear(), getMonth(action.payload.date.getMonth()), action.payload.date.getDate(), getDayOfWeek(action.payload.date.getDay()))];
        case ACTION.DAY_TWO : 
            return [...dates, newDate(action.payload.id, action.payload.date.getFullYear(), getMonth(action.payload.date.getMonth()), action.payload.date.getDate(), getDayOfWeek(action.payload.date.getDay()))];
        case ACTION.DAY_THREE : 
            return [...dates, newDate(action.payload.id, action.payload.date.getFullYear(), getMonth(action.payload.date.getMonth()), action.payload.date.getDate(), getDayOfWeek(action.payload.date.getDay()))];
        case ACTION.DAY_FOUR : 
            return [...dates, newDate(action.payload.id, action.payload.date.getFullYear(), getMonth(action.payload.date.getMonth()), action.payload.date.getDate(), getDayOfWeek(action.payload.date.getDay()))];
    }
}

function newDate(id, year, month, day, dayOfWeek){
    return {
        id:id,
        year:year,
        month:month,
        day:day,
        dayOfWeek:dayOfWeek
    }
}

function ForecastCard(props) {

  const apiKey = "ff4b41be54077fc82ce47fc4894362a7";

  const [data, setData] = useState();
  const [dates, dispatch] = useReducer(reducer, []);


  function prepareDates(){
      dispatch({type: ACTION.CLEAR_DATES});

      const currentDate = new Date();
      
      const oneDayAfter = new Date(currentDate);
      oneDayAfter.setDate(currentDate.getDate() + 1);
      
      const twoDayAfter = new Date(currentDate);
      twoDayAfter.setDate(currentDate.getDate() + 2);
      
      const threeDayAfter = new Date(currentDate);
      threeDayAfter.setDate(currentDate.getDate() + 3);
     
      const fourDayAfter = new Date(currentDate);
      fourDayAfter.setDate(currentDate.getDate() + 4);
      
      dispatch({type: ACTION.DAY_ONE, payload:{id:1, date: oneDayAfter}});
      dispatch({type: ACTION.DAY_TWO, payload:{id:2, date: twoDayAfter}});
      dispatch({type: ACTION.DAY_THREE, payload:{id:3, date: threeDayAfter}});
      dispatch({type: ACTION.DAY_FOUR, payload:{id:4, date: fourDayAfter}});

  }


  useEffect(()=>{
    const city = props?.currentCity;
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
    .then(function(response){
      
      setData(response.data)
      console.log(response.data);
      prepareDates();
    })
    .catch(function(error){
      console.log(error);
    })
  },[props?.currentCity])


  console.log(dates);

  return (
    <div className="container text-center">
      <div className="weather-card">

        
      {dates.map((date)=>{
          return(
              <div>
                  <ForecastDay  date={date} forecastData={data}></ForecastDay>
                  {date.id < 4 && <hr className="mx-auto" style={{border: "1px solid white", width:"90%", textAlign:"center"}}/>}
              </div>
          ) 
      })}

        
        

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
