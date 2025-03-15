import React from 'react';
export function Finalcard({ image1, head1, text1 }) {
    return (
        <div className='cont3card3final'>
            <img src={image1} className='profilecard7'></img>
            <p className='card1p'>{text1}</p>
            <h5 className='card1h5' style={{ textAlign: 'center' }}>{head1}</h5>
        </div>
    );
}

export default Finalcard;