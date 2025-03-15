import React from 'react';
import Icon2 from './icon2';
import { FaShoppingBag } from "react-icons/fa";
export function Finalcard1({ image1, head1, text1, text2 }) {
    return (
        <div className='cont3card3final' style={{ padding: '0px' }}>
            <img src={image1} className='profilecard7'></img>
            <h5 className='card1h5' style={{ margin: '0', marginRight: '70px' }}>{head1}</h5>
            <p className='card1p' style={{ margin: '0', marginRight: '70px' }}>{text1}</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p className='card1p' style={{ color: 'rgb(56, 41, 204)', fontSize: '14px', marginRight: '40px', marginTop: '10px' }}>{text2}</p>
                <Icon2 icon1={<FaShoppingBag />} />
            </div>
        </div >
    );
}

export default Finalcard1;