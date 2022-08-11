import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    // 1. Dodanie listy elementów w menu
    return (
        <div>
            <ul>
                <li><NavLink to={"/"}>Strona Główna</NavLink></li>
                <li><NavLink to={"/cart"}>Koszyk</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;