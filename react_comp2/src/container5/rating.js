import React from 'react'
import { FaStar } from "react-icons/fa6";
import Countrating from './countrating';
function Rating() {
    return (
        <div className='ratingalignrow'>
            <div className='reviewcol'>
                <div className='reviewrow'>
                    <p className='ratingp'>4.4</p>
                    <i className='ratingicon'><FaStar /></i>
                </div>
                <p className='weatherp' style={{ fontSize: '10px' }}>32 reviews</p>
            </div>
            <div className='countrating2'>
                <Countrating text1='5' min='0' max='100' />
                <Countrating text1='4' min='0' max='100' />
                <Countrating text1='3' min='0' max='100' />
                <Countrating text1='2' min='0' max='100' />
                <Countrating text1='1' min='0' max='100' />
            </div>
        </div>
    )
}

export default Rating;
