import React from 'react';
export function Card1({ image1, head1, text1, text2 }) {
    return (
        <div className='cont4card1'>
            <img src={image1} className='profilecard6'></img>
            <div className='cont4aligncolumn'>
                <h5 className='cont4card1h5'>{head1}</h5>
                <p className='cont4card1p'>{text1}</p>
                <p className='cont4card1p'>{text2}</p>
            </div>
        </div>
    );
}

export default Card1;