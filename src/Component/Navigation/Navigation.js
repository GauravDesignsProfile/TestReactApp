import React from "react";
import logo from "../Images/Logo.jpg";
import "./Navigation.css";
import {NavLink} from 'react-router-dom';

function Navigation() {
    return(
        <div className="Nav">
            <img src={logo} alt=""/>
            <div>
                <NavLink to="/Notes">Notes</NavLink>
                <NavLink to="/About">About</NavLink>
            </div>
        </div>
    );
}

export default Navigation;