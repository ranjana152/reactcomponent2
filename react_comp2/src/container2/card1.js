import React from 'react';
import Icon2 from '../container5/icon2';
import { FaPlay } from "react-icons/fa6";
function Card1({ image1, head1, text1 }) {
    return (
        <div className='cont2card1-row'>
            <img src={image1} className='profilecard2'></img>
            <div className='merge'>
                <h5 className='card1h5'>{head1}</h5>
                <p className='card1p'>{text1}</p>
            </div>
            <Icon2 icon1={<FaPlay />} />
        </div>
    );
}

export default Card1;