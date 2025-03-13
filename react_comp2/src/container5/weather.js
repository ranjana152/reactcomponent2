import React from 'react';
import { AiFillSun } from "react-icons/ai";
import Button from '../container_1/button';
function Weather() {
    return (
            <div className='weather'>
                <i className='weathericon'>{<AiFillSun />}</i>
                <p className='weatherp'>2&deg;</p>
                <p className='weatherp' style={{ fontSize: '10px' }}>sunny</p>
                <p className='weatherp' style={{ marginTop: '90px', position: 'absolute' }}>7</p>
            </div>
    )
}

export default Weather;
