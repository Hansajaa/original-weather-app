import React from "react";
import {} from "./Navbar.css";
import CurrentWeatherCard from "./CurrentWeatherCard";
import FeatureCard from "./FeatureCard";
import AdditionalCard from "./AdditionalCard";
import ForecastCard from "./ForecastCard";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-dark fixed-top mt-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Weather Pulse
            </a>
            <input
              id="txtSearch"
              type="text"
              className="form-control mt-3"
              style={{ width: "30%", borderRadius: "30px" }}
              placeholder="Search City"
            />
            <button
              id="searchBtn"
              className="btn btn-secondary mt-3"
              style={{ borderRadius: "30px" }}
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

      <div className="row" style={{ marginLeft: "-2rem", marginTop: "3rem" }}>
        <div className="col-3 main-card">
          <CurrentWeatherCard></CurrentWeatherCard>
        </div>
        <div className="col-9" style={{ marginLeft: "4%", marginTop: "2%" }}>
          <div className="row">
            <div className="col">
              <FeatureCard></FeatureCard>
            </div>
            <div className="col">
              <FeatureCard></FeatureCard>
            </div>
            <div className="col">
              <FeatureCard></FeatureCard>
            </div>
            <div className="col">
              <FeatureCard></FeatureCard>
            </div>
          </div>
          <div className="row">
            <AdditionalCard></AdditionalCard>
          </div>
        </div>
      </div>

      {/* Forecast card row */}
      <div className="row" style={{marginTop:"-32%", marginLeft:"-17%"}}>
        <div className="col-12">
          <ForecastCard></ForecastCard>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
