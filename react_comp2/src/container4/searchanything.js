import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { RxMixerVertical } from "react-icons/rx";
import Icon from './icon';
function Searchanything() {
    return (
        <div className='searchcontainer'>
            <i className='searchicon'><IoSearchOutline /></i>
            <input className='inputsearch' placeholder='Search anything....'></input>
            <Icon icon1={<RxMixerVertical />} />
        </div>
    )
}

export default Searchanything;
