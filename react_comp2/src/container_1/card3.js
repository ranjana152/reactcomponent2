import React from 'react';
import Button from './button';
function Card3({ image1, head1, icon1, icon2 }) {
    return (
        <div className='card2'>
            <i style={{ textAlign: 'center' }}>{image1}</i>
            <h5 className='card1h5' style={{ textAlign: 'center' }}>{head1}</h5>
            <div className='card2flex'>
                <div className='iconp'>
                    <i>{icon1}</i>
                    <i>{icon2}</i>
                </div>
                <div className='iconp'>
                    <i>{icon1}</i>
                    <i>{icon2}</i>
                </div>
                <div className='iconp'>
                    <i>{icon1}</i>
                    <i>{icon2}</i>
                </div>
                <div className='iconp'>
                    <i>{icon1}</i>
                    <i>{icon2}</i>
                </div>
            </div>
            <Button width='190px' marginLeft='0px' button='Continue' />
        </div>
    );
}

export default Card3;