import React from 'react'
function Icon3({ icon1, icon2 }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <div className='fillcontainer3'>
                <i className='filtericon3' style={{ color: 'red' }}>{icon1}</i>
            </div>
            <div className='fillcontainer4'>
                <i className='filtericon3' style={{ color: 'green' }}>{icon2}</i>
            </div>
        </div>
    )
}
export default Icon3;
