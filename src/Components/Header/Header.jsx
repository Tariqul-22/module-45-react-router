import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h3>Nav Bar</h3>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <Link to="/support">support</Link>
            </nav>
        </div>
    );
};

export default Header;