import React from 'react';
export function Card1({ image1, head1, text1 }) {
    return (
        <div className='cont3card1'>
            <img src={image1} className='profilecard3'></img>
            <div>
                <h5 className='card1h5'>{head1}</h5>
                <p className='card1p'>{text1}</p>
            </div>
            <div className='followersFollowing'>
                <div className='follower'>
                    <p>Followers</p>
                    <p>23</p>
                </div>
                <div className='follower'>
                    <p>Following</p>
                    <p>23</p>
                </div>
            </div>
        </div>
    );
}

export default Card1;