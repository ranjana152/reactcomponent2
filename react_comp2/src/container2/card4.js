import React from 'react';
function Card4({ image1, head1, text1 }) {
    return (
        <div className='cont2card1-row'>
            <img src={image1} className='profilecard2'></img>
            <div className='merge' style={{ marginRight: '120px' }}>
                <h5 className='card1h5'>{head1}</h5>
                <p className='card1p'>{text1}</p>
            </div>
        </div>
    );
}

export default Card4;