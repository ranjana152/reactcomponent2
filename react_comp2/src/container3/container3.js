import React from 'react';
import '../style.css'
import Card1 from './card1';
import mark from '../Assets/mark.png'
import Card3 from './card3';

function Container3() {
    return (
        <div className='container3'>
            <Card1 image1={mark} head1='FIND MY' text1='Dababy' />
            <Card3 image1={mark} head1='FIND MY' text1='Dababy' />
        </div>
        
    );
}
export default Container3;