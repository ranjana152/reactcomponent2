import React from 'react';
function Card3({ image1, head1, text1, text2 }) {
    return (
        <div className='cont2card1-row'>
            <img src={image1} className='profilecard2'></img>
            <div className='merge'>
                <h5 className='card1h5'>{head1}</h5>
                <p className='card1p' style={{ fontSize: '8px' }}>{text1}</p>
            </div>
            <p className='card1p' style={{ color: 'rgb(56, 41, 204)', fontSize: '14px', marginRight: '20px', marginTop: '20px' }}>{text2}</p>
        </div>
    );
}

export default Card3;