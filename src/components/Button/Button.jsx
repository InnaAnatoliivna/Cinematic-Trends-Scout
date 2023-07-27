import React from 'react'

const Button = ({ children, handleClick }) => {
    return (
        <button type='button' onClick={handleClick}>{children}</button>
    )
}

export default Button;