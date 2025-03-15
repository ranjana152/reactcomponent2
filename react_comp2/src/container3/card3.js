import React from 'react';
export function Card3({ image1, head1, text1 }) {
    return (
        <div className='cont3card3'>
            <img src={image1} className='profilecard4'></img>
            <h5 className='card1h5'>{head1}</h5>
            <p className='card1p'>{text1}</p>
        </div>
    );
}

export default Card3;