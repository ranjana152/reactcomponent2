import React from 'react';
import '../style.css'
import Weather from './weather';
import Button from '../container_1/button';
import Togglerating from './togglerating';
import Threeicons from './threeicons';
import Filters from './filters';
import Icon from './greaterlesser';
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import Greater from './greaterlesser';
import Finalcard from './finalcard1';
import shirt from '../Assets/shirt.png'
import hustle from '../Assets/hustle.png'
import Finalcard1 from './finalcard2';
const colors = [
    {
        color: 'black',
        border: '1px solid white'
    },
    {
        color: 'red',
        border: 'none'
    },
    {
        color: 'orange',
        border: 'none'
    },
    {
        color: 'yellow',
        border: 'none'
    },
    {
        color: 'green',
        border: 'none'
    },
    {
        color: 'cyan',
        border: 'none'
    },
    {
        color: 'skyblue',
        border: 'none'
    }
]
const materials = [
    {
        name: 'Cotton',
        border: '1px solid lightgray'
    },
    {
        name: 'Linen',
        border: '1px solid lightgray'
    },
    {
        name: 'Polyster',
        border: '1px solid lightgray'
    }
]
function Container5() {
    return (
        <div className='container5'>
            <Weather />
            <Button width='130px' button='Button text' /><br />
            <Button width='250px' marginLeft='-130px' button='Button text' />
            <Togglerating />
            <Threeicons />
            <Filters head1='Filters' head2='Price' head3='$50-$125' head4='Color' colors={colors} head5='Material' materials={materials} />
            <div style={{
                display: 'flex', flexDirection: 'row', position: 'absolute',
                top: '940px', marginLeft: '-260px'
            }}>
                <Greater icon1={<FaLessThan />} />
                <Greater icon1={<FaGreaterThan />} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '940px', marginLeft: '-100px' }}>
                <Finalcard image1={shirt} head1='NEW COLLECTION' text1='Summer outfits' />
                <Finalcard1 image1={hustle} head1='Coffe mug' text1='Hustle edition' text2='$7.9' />
            </div>
        </div>

    );
}
export default Container5;