import React from "react";
import { NavLink } from "react-router-dom";

const Button=()=>{
    return(
        <>
        <NavLink className="nav-link active" aria-current="page" to="/About">Login</NavLink>
        </>
    );
};
export default Button;