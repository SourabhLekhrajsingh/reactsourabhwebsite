import React from "react";
import { Homeo } from "./Homeo";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        <div className="container-fluid nav-bg">
            <div className='row'>
      <div className="col-10 mx-auto">
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="Homeo">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="Service">Service</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  to="/Contact">Conatct</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/Todolist">Todolist</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
</div>
</div>
</>
        
    );
};
export default Navbar;