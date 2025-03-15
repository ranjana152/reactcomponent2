import React from 'react'
import { BsToggles } from "react-icons/bs";
import Rating from './rating';
function Togglerating() {
    return (
        <div className='togglealignRow'>
            <div className='toggleclass'>
                <i className='toggleOn'><BsToggles /></i>
            </div>
            <Rating />
        </div>
    )
}

export default Togglerating;
