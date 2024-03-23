import React from 'react';
import RainImage from '../assets/images/rain.png'
import ClearImage from '../assets/images/clear.png'
import CloudsImage from '../assets/images/clouds.png'
import DrizzleImage from '../assets/images/drizzle.png'
import MistImage from '../assets/images/mist.png'


function ForecastCard(props) {
    return (
        <div className='container text-center'>
            <div className="weather-card" style={{width:"71rem", height:"60rem"}}>
                <div className="row mt-4">
                    <div className="col-4">
                        <img src={RainImage} alt="" width={150}/>
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
                        <img src={ClearImage} alt="" width={150}/>
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
                        <img src={CloudsImage} alt="" width={150}/>
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
                        <img src={DrizzleImage} alt="" width={150}/>
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
                        <img src={MistImage} alt="" width={150}/>
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