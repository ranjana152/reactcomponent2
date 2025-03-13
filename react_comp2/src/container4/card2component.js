import React from 'react';
function Card2Component({ photo, text1, icon2, text2 }) {
    return (
        <div className='cont4card2flex'>
            <img src={photo} className='cont4card2img'></img>
            <div className='cont4card2details'>
                <p className='cont4card1p'>{text1}</p>
                <div className='cont4card2det2'>
                    <i>{icon2}</i>
                    <p className='cont4card1p'>{text2}</p>
                </div>
            </div>
        </div>
    );
}
export default Card2Component;