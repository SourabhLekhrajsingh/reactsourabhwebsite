import React from "react";
import { NavLink } from "react-router-dom";


const Detailing=()=>{
    return(
        <>
        <NavLink className="nav-link active" aria-current="page" to="/Details">Details</NavLink>
        </>
    );
};
export default Detailing;