import React from 'react';
import '../style.css'
import profile1 from '../Assets/profile.jpg';
import profile2 from '../Assets/profile2.png';
import profile3 from '../Assets/profile3.png';
import profile4 from '../Assets/profile4.png';
import Card1 from './card1';
import Container3 from '../container3/container3';
import Container4 from '../container4/container4';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
function Container2() {
    return (
        <div className='aligncolumn'>
            <div className='alignrow'>
                <div className='container2'>
                    <Card1 image1={profile1} head1='FIND MY WAY' text1='DaBaby' />
                    <Card2 image1={profile2} head1='Alex Traier' text1='Friend request' />
                </div>
                <div className='container2'>
                    <Card4 image1={profile3} head1='Paps' text1='3.2km' />
                    <Card3 image1={profile4} head1='Coffee mug' text1='Beautiful and durable' text2='$7.9' />
                </div>
            </div>
            <Container3 />
            <Container4 />
        </div>
    );
}
export default Container2;