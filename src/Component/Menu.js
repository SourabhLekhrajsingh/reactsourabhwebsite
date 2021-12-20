import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
    return (
        <>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/contacti"> Contact Us</NavLink>
        <NavLink to="/Homes"> Homes Us</NavLink> 
        <NavLink to="/Mumbai/A-one"> Mumbai </NavLink> 
        <NavLink to="/Delhi/ramu"> Delhi </NavLink> 
        </>
    )
}
