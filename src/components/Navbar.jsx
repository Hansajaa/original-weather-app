import React, { useEffect, useState } from "react";
import {} from "./Navbar.css";
import CurrentWeatherCard from "./CurrentWeatherCard";
import AdditionalCard from "./AdditionalCard";
import ForecastCard from "./ForecastCard";
import WindCard from "./WindCard";
import HumadityCard from "./HumadityCard";
import FeelsLikeByCelcius from "./FeelsLikeByCelcius";
import FeelsLikeByFarenheit from "./FeelsLikeByFarenheit";
import Aos from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Navbar() {
  const apiKey = "ff4b41be54077fc82ce47fc4894362a7"

  const [city, setCity] = useState("colombo");

  // get Current Location
  const [location, setLocation] = useState();
  const [initialLoading, setInitialLoading] = useState(true);

  if (navigator.geolocation && initialLoading) {
    const watchId = navigator.geolocation.watchPosition((position) => {
      setLocation(position);
      //console.log(location?.coords.longitude);
    });
    setInitialLoading(false);
  }

  // get current location by latitude and longitude
  useEffect(()=>{

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location?.coords.latitude}&lon=${location?.coords.longitude}&appid=${apiKey}`)
    .then(function (response) {
      
      console.log(response);
      console.log(response.data);
      console.log(response.data.name);
      setCity(response.data.name);
    })
    .catch(function (err) {
      console.log(err);
    });

  },[]);

  // Initial loading Animation
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors,isSubmitSuccessful },
  } = useForm();

  // API call while button onClick
  const onSubmit = (data) => {
    setCity(data.txtCity);
    reset();
  };

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset({txtCity:""})
    }
  },[city]);

  return (
    <div className="container-fluid" style={{marginLeft:"1.5%"}}>
      <div className="row">
        <nav className="navbar navbar-dark fixed-top mt-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Weather Pulse
            </a>
            <input
              {...register("txtCity", { required: true })}
              id="txtSearch"
              type="text"
              className="form-control mt-3 bg-light border-dark"
              style={{ width: "30%", borderRadius: "30px" }}
              placeholder="Search City"
            />
            <button
              id="searchBtn"
              className="btn btn-dark mt-3"
              style={{ borderRadius: "30px" }}
              onClick={handleSubmit(onSubmit)}
            >
              <i className="bi bi-search"></i>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <form className="d-flex mt-3" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search City"
                    aria-label="Search"
                    style={{ borderRadius: "30px" }}
                  />
                  <button
                    className="btn btn-secondary"
                    type="submit"
                    style={{ borderRadius: "30px" }}
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </form>
                <br></br>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Forecast
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="row" style={{ marginLeft: "-2rem", marginTop: "7rem" }}>
        <div className="col-3 main-card">
          <CurrentWeatherCard
            currentCity={city}
          ></CurrentWeatherCard>
        </div>
        <div className="col-9" style={{ marginLeft: "4%", marginTop: "2%" }}>
          <div className="row">
            <div className="col">
              <WindCard currentCity={city}></WindCard>
            </div>
            <div className="col">
              <HumadityCard currentCity={city}></HumadityCard>
            </div>
            <div className="col">
              <FeelsLikeByCelcius currentCity={city}></FeelsLikeByCelcius>
            </div>
            <div className="col">
              <FeelsLikeByFarenheit currentCity={city}></FeelsLikeByFarenheit>
            </div>
          </div>
          <div className="row">
            <AdditionalCard currentCity={city}></AdditionalCard>
          </div>
        </div>
      </div>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "3%",
          marginTop: "2%",
          marginLeft: "-8%",
        }}
      >
        <b>5 Days Forecast</b>
      </p>

      {/* Forecast card row */}
      <div className="row" style={{ marginTop: "-32%", marginLeft: "-17%" }}>
        <div className="col forecast-card">
          <ForecastCard currentCity={city}></ForecastCard>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
