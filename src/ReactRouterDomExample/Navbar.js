import { NavLink } from "react-router-dom";
import './styles/style.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div>
                <NavLink className="navlinks" to="/">Home</NavLink>
                <NavLink className="navlinks" to="/about-us">AboutUs</NavLink>
                <NavLink className="navlinks" to="/contact-us">ContactUs</NavLink>
                <NavLink className="navlinks" to="/projects">Projects</NavLink>
                <NavLink className="navlinks" to="/users">Users</NavLink>
            </div>

        </div>
    );
}
