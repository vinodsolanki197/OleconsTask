import { Link } from "react-router-dom";
import './menu.css'

const Menu = () => {
    return  (
        <div class="navbar">
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>

        </div>
    );
}

export default Menu;