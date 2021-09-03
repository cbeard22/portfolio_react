import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleOpen }) => {
    return (
        <nav className="flex justify-between item-center h16 bg-gray-900 text-white relative shadow-sm">

            <NavLink to="/" exact className="cursive nav-home" activeClassName="text-indigo-600">
                Home
            </NavLink>

            <div className="px-4 cursor-pointer nav-links md:hidden" onClick={toggleOpen}>
                Tester
            </div>

            <NavLink to="/about" exact className="nav-links p-4" activeClassName="text-indigo-600">
                About
            </NavLink>

            <NavLink to="/project" exact className="nav-links p-4" activeClassName="text-indigo-600">
                Projects
            </NavLink>

            <NavLink to="/contact" exact className="nav-links p-4" activeClassName="text-indigo-600">
                Contact
            </NavLink>
        </nav>
    );
}

export default Navbar;