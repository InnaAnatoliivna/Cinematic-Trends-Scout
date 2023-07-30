import React from 'react'
import { TbArrowBigLeftLineFilled } from 'react-icons/tb';
import css from 'components/Button/Button.module.css'
import { Link, useLocation } from 'react-router-dom';

const Button = ({ children, handleClick }) => {
    const location = useLocation();
    const fromLocation = location.state?.from;

    return (
        <div className={css.wrapper}>
            <Link to={fromLocation || '/'} onClick={handleClick} className={css.button}>
                <TbArrowBigLeftLineFilled className={css.icon} />
                {children}
            </Link></div>
    )
}

export default Button;