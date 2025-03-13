import React from 'react'
function Button({width = "auto",marginLeft='0px',button}) {
    return (
        <div>
            <button style={{ width , marginLeft}} className='button'>{button}</button>
        </div>
    )
}

export default Button;
