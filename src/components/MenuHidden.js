import { NavLink } from "react-router-dom";

const MenuHidden = ({ toggleOpen }) => {
    return (
        <div className="" onClick={toggleOpen}>
            <NavLink to="/about" exact className="px-4 text white font-sans">
                About
            </NavLink>
            <NavLink to="/project" exact className="px-4 text white font-sans">
                Projects
            </NavLink>
            <NavLink to="/contact" exact className="px-4 text white font-sans">
                Contact
            </NavLink>
        </div>
    );
}

export default MenuHidden;