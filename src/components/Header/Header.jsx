import { NavLink } from "react-router-dom";
import { MdOutlineLocalMovies } from 'react-icons/md';

const Header = () => {
    return (
        <nav>
            <span className="logo"><MdOutlineLocalMovies /></span>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
        </nav>
    )
}
export default Header;