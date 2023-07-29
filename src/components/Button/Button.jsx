import React from 'react'
import { TbArrowBigLeftLineFilled } from 'react-icons/tb';
import css from 'components/Button/Button.module.css'

const Button = ({ children, handleClick }) => {
    return (
        <button type='button' onClick={handleClick} className={css.button}>
            <TbArrowBigLeftLineFilled className={css.icon} />
            {children}
        </button>
    )
}

export default Button;