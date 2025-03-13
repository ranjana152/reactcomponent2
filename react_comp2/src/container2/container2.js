import React from 'react';
import '../style.css'
import profile from '../Assets/profile.jpg';
import { FaPlay } from "react-icons/fa6";
import Card1 from './card1';
import Container3 from '../container3/container3';
import Container4 from '../container4/container4';
function Container2() {
    return (
        <div className='aligncolumn'>
            <div className='alignrow'>
                <div className='container2'>
                    <Card1 image={profile} head1='sdfghjkl' text1='dfghjk' icon1={<FaPlay />} />
                    <Card1 image={profile} head1='sdfghjkl' text1='dfghj' icon1={<FaPlay />} />
                </div>
                <div className='container2'>
                    <Card1 image={profile} head1='sdfghjkl' text1='dfghjk' icon1={<FaPlay />} />
                    <Card1 image={profile} head1='sdfghjkl' text1='dfghj' icon1={<FaPlay />} />
                </div>
            </div>
            <Container3 />
            <Container4 />
        </div>
    );
}
export default Container2;