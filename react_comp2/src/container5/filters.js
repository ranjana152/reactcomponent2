import React from 'react';
import Button from '../container_1/button';
import Addnew from './addnewcard';
function Filters({ head1, head2, head3, head4, colors, head5, materials }) {
    return (
        <div className='totalrow'>
            <div className='filter'>
                <h5 className='card1h5' style={{ textAlign: 'center' }}>{head1}</h5>
                <div className='price'>
                    <div className='pricehead'>
                        <h5 className='card1h5'>{head2}</h5>
                        <h5 className='card1h5' style={{ color: 'rgb(56, 41, 204)' }}>{head3}</h5>
                    </div>
                    <input className='inputrange3' type='range' min='20' max='60'></input>
                    <div className='colors'>
                        <h5 className='card1h5'>{head4}</h5>
                        <div className='colorsrows'>
                            {colors.map((color) => {
                                return (<div style={{
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '10px',
                                    backgroundColor: color.color,
                                    border: color.border,
                                    margin: '10px 5px'
                                }}>
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className='colors'>
                        <h5 className='card1h5'>{head5}</h5>
                        <div className='colorsrows'>
                            {materials.map((material) => {
                                return (<div style={{
                                    height: '20px',
                                    borderRadius: '15px',
                                    border: material.border,
                                    padding: '2px 10px 5px 10px',
                                    margin: '20px 10px 0 0',
                                    fontSize: '12px',
                                    color: 'lightgray'
                                }}>{material.name}
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
                <Button width='200px' marginLeft='0px' button='Apply' />
            </div>
            <Addnew head1='Add new card' placeholder1='Card number...' placeholder2='Owner name' placeholder3='Exp date' placeholder4='CVC' />
        </div>
    )
}

export default Filters;
