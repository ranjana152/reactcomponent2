import React from 'react';
import Card2Component from './card2component';
import photo1 from '../Assets/photo1.png'
import photo2 from '../Assets/photo2.png'
import photo3 from '../Assets/photo3.png'
import { IoHeartHalfSharp } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
function Card2({ image1, head1 }) {
    return (
        <div className='cont4card2'>
            <i style={{ textAlign: 'center' }}>{image1}</i>
            <h5 className='cont4card2h5' style={{ textAlign: 'center' }}>{head1}</h5>
            <Card2Component photo={photo1} text1='Anna' icon2={<IoHeartHalfSharp />} text2='Liked your photo' />
            <Card2Component photo={photo2} text1='Tom' icon2={<FaCommentDots />} text2='Commented' />
            <Card2Component photo={photo3} text1='Amy' icon2={<FaUser />} text2='Wants to be friends' />
        </div>
    );
}
export default Card2;