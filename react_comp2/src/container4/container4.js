import React from 'react';
import '../style.css'
import sara from '../Assets/sara.png'
import Card1 from './card1';
import Card2 from './card2';
import { IoNotifications } from "react-icons/io5";
function Container4() {
    return (
        <div className='container4'>
            <Card1 image1={sara} head1='Boring girls' text1='Sara Taylor' text2='Amazing,very interesting novel by sara taylor.Must read by everyone!' />
            <Card2 image1={<IoNotifications color='white'/>} head1='Notifications'/>
        </div>

    );
}
export default Container4;