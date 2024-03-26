import React from 'react';
import RainImage from '../assets/images/rain.png'
import ClearImage from '../assets/images/clear.png'
import CloudsImage from '../assets/images/clouds.png'
import DrizzleImage from '../assets/images/drizzle.png'
import MistImage from '../assets/images/mist.png'
import './ForecastCard.css'


function ForecastCard(props) {
    return (
        <div className='container text-center'>
            <div className="weather-card">
                <div className="row mt-4">
                    <div className="col-4">
                        <img className='weather-img' src={RainImage} alt=""/>
                    </div>
                    <div className="col-4 mt-5">
                        <b><h5 className='text-white'>12 Mar</h5></b>
                    </div>
                    <div className="col-4 mt-5">
                        <b><p>Tuesday</p></b>
                    </div>
                </div>
                <hr className='mx-auto text-white' style={{borderTop:"2px solid"}} width="80%"></hr>

                <div className="row">
                    <div className="col-4">
                        <img className='weather-img' src={ClearImage} alt=""/>
                    </div>
                    <div className="col-4 mt-5">
                        <b><h5 className='text-white'>12 Mar</h5></b>
                    </div>
                    <div className="col-4 mt-5">
                        <b><p>Tuesday</p></b>
                    </div>
                </div>
                <hr className='w-90 mx-auto text-white' style={{borderTop:"2px solid"}} width="80%"></hr>

                <div className="row">
                    <div className="col-4">
                        <img className='weather-img' src={CloudsImage} alt=""/>
                    </div>
                    <div className="col-4 mt-5">
                        <b><h5 className='text-white'>12 Mar</h5></b>
                    </div>
                    <div className="col-4 mt-5">
                        <b><p>Tuesday</p></b>
                    </div>
                </div>
                <hr className='w-90 mx-auto text-white' style={{borderTop:"2px solid"}} width="80%"></hr>

                <div className="row">
                    <div className="col-4">
                        <img className='weather-img' src={DrizzleImage} alt=""/>
                    </div>
                    <div className="col-4 mt-5">
                        <b><h5 className='text-white'>12 Mar</h5></b>
                    </div>
                    <div className="col-4 mt-5">
                        <b><p>Tuesday</p></b>
                    </div>
                </div>
                <hr className='w-90 mx-auto text-white' style={{borderTop:"2px solid"}} width="80%"></hr>

                <div className="row">
                    <div className="col-4">
                        <img className='weather-img' src={MistImage} alt=""/>
                    </div>
                    <div className="col-4 mt-5">
                        <b><h5 className='text-white'>12 Mar</h5></b>
                    </div>
                    <div className="col-4 mt-5">
                        <b><p>Tuesday</p></b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForecastCard;