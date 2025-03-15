import React from 'react';
import Button from './button';
function Card3({ image1, head1, icon1, icon2, icon3, icon4, icon5, icon6 }) {
    return (
        <div className='card2'>
            <i style={{ textAlign: 'center' }}>{image1}</i>
            <h5 className='card1h5' style={{ textAlign: 'center' }}>{head1}</h5>
            <div className='card2flex'>
                <div className='iconp'>
                    <i className='cardicon'>{icon1}</i>
                    <i className='cardicon' style={{ color: 'darkblue' }}>{icon2}</i>
                </div>
                <div className='iconp'>
                    <i className='cardicon'>{icon3}</i>
                    <i className='cardicon' style={{ color: 'red' }}>{icon4}</i>
                </div>
                <div className='iconp'>
                    <i className='cardicon'>{icon3}</i>
                    <i className='cardicon' style={{ color: 'darkblue' }}>{icon5}</i>
                </div>
                <div className='iconp'>
                    <i className='cardicon'>{icon3}</i>
                    <i className='cardicon'>{icon6}</i>
                </div>
            </div>
            <Button width='190px' marginLeft='0px' button='Continue' />
        </div>
    );
}

export default Card3;