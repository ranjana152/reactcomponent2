import React from 'react';
function Card1({ image1, head1, text1,icon1}) {
    return (
        <div className='cont2card1-row'>
            <img src={image1} className='profilecard2'></img>
            <div className='merge'>
            <h5 className='cont2card1h5'>{head1}</h5>
            <p className='cont2card1p'>{text1}</p>
            </div>
            <i className='iconwidth'>{icon1}</i>
        </div>
    );
}

export default Card1;