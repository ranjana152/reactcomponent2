import React from 'react';
import Button from '../container_1/button';
function Addnew({ head1, placeholder1, placeholder2, placeholder3, placeholder4 }) {
    return (
        <div className='addnew'>
            <h5 className='card1h5' style={{ textAlign: 'center' }}>{head1}</h5>
            <input className='text' placeholder={placeholder1}></input>
            <input className='text' placeholder={placeholder2}></input>
            <div style={{ display: 'flex' }}>
                <input className='text2' placeholder={placeholder3}></input>
                <input className='text2' placeholder={placeholder4}></input>
            </div>
            <Button width='200px' marginLeft='0px' button='Sav' />
        </div>
    )
}
export default Addnew;
