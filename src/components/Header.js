import React from "react";
import { NavLink } from "react-router-dom";

const activeLink = {color: "orange"}

function Header() {
    return(
        <nav>
            <NavLink activeStyle={activeLink} exact to="/">Home</NavLink> {" "}
            | {" "}
            <NavLink activeStyle={activeLink} to="/cars">Vehicles</NavLink> {" "}
            | {" "} 
            <NavLink activeStyle={activeLink} to="/about">About</NavLink>
        </nav>
    )
}

export default Header;