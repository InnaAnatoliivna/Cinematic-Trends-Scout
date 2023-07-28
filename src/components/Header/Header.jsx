import { NavLink } from "react-router-dom";
import { MdOutlineLocalMovies } from 'react-icons/md';
import css from 'components/Header/header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <nav className={css.navigation}>
                <span className={css.icon}><MdOutlineLocalMovies /></span>
                <NavLink to='/' className={css.menu}>Home</NavLink>
                <NavLink to='/movies' className={css.menu}>Movies</NavLink>
            </nav>
        </div>
    )
}
export default Header;