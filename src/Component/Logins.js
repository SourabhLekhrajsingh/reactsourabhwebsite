import React from "react";
import { NavLink } from "react-router-dom";

const Logins=()=>{
    return(
        <>
        <NavLink className="nav-link active" aria-current="page" to="/Form">Login</NavLink>
        </>
    );
};
export default Logins;