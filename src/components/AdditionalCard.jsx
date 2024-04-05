import React, { useState, useEffect } from 'react';
import style from './AdditionalCard.module.css'
import axios from 'axios';

function AdditionalCard(props) {

    const apiKey = "ff4b41be54077fc82ce47fc4894362a7";

    const [components, setComponents] = useState({});

    async function callApis() {
        try {
            const city = props?.currentCity;
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const airPollutionResponse = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherResponse.data.coord.lat}&lon=${weatherResponse.data.coord.lon}&appid=${apiKey}`);
            
            console.log(airPollutionResponse);
            setComponents(airPollutionResponse.data.list[0].components);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        callApis();
    },[props?.currentCity])

    return (
        <div data-aos="fade-left">
            <div className={style.weatherCard}>
                <div className="row">
                    <div className="col">
                        <p className='text-white ' style={{marginLeft:"2%", marginTop:"2%"}}>Air Quality Index</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className='text-white' style={{marginLeft:"55%"}}>PM <sub>2.5</sub></p>
                    </div>
                    <div className="col">
                        <p className='text-white' style={{marginLeft:"55%"}}>SO <sub>2</sub></p>
                    </div>
                    <div className="col">
                        <p className='text-white' style={{marginLeft:"55%"}}>No <sub>2</sub></p>
                    </div>
                    <div className="col">
                        <p className='text-white' style={{marginLeft:"55%"}}>O <sub>3</sub></p>
                    </div>
                </div>
                <div className="row" style={{marginLeft:"-3%"}}>
                    <div className="col">
                        <h2 className='text-white' style={{marginLeft:"55%"}}>{components?.pm2_5}</h2>
                    </div>
                    <div className="col">
                        <h2 className='text-white' style={{marginLeft:"55%"}}>{components?.so2}</h2>
                    </div>
                    <div className="col">
                        <h2 className='text-white' style={{marginLeft:"55%"}}>{components?.no2}</h2>
                    </div>
                    <div className="col">
                        <h2 className='text-white' style={{marginLeft:"55%"}}>{components?.o3}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdditionalCard;