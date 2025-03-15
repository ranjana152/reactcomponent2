import React from 'react'
import { FaStar } from "react-icons/fa6";
function Countrating({text1, min,max}) {
    return (
        <div className='countrating'>
            <p className='countp'>{text1}</p>
            <i className='counticon'><FaStar /></i>
            <input className='inputrange' type='range' min={min} max={max}></input>
        </div>
    )
}

export default Countrating;
