import React from 'react';
import '../style.css'
import Weather from './weather';
import Button from '../container_1/button';
function Container5() {
    return (
        <div className='container5'>
            <Weather />
            <Button width='130px' button='Button text' /><br />

            <Button width='250px' marginLeft='-130px' button='Button text' />
        </div>

    );
}
export default Container5;