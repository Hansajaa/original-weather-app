import React from 'react';
import style from './AdditionalCard.module.css'

function AdditionalCard(props) {
    return (
        <div>
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
                        <h2 className='text-white' style={{marginLeft:"55%"}}>3.18</h2>
                    </div>
                    <div className="col">
                        <h2 className='text-white' style={{marginLeft:"55%"}}>3.18</h2>
                    </div>
                    <div className="col">
                        <h2 className='text-white' style={{marginLeft:"55%"}}>3.18</h2>
                    </div>
                    <div className="col">
                        <h2 className='text-white' style={{marginLeft:"55%"}}>3.18</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdditionalCard;