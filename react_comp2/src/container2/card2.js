import React from 'react';
import Icon3 from '../container_1/icon3';
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
function Card2({ image1, head1, text1 }) {
    return (
        <div className='cont2card1-row'>
            <img src={image1} className='profilecard2'></img>
            <div className='merge'>
                <h5 className='card1h5'>{head1}</h5>
                <p className='card1p'>{text1}</p>
            </div>
            <Icon3 icon1={<RxCross2 />} icon2={<TiTick />}/>
        </div>
    );
}

export default Card2;