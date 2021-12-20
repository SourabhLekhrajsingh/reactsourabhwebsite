import React from "react";
import LokaciHome from "./LokaciHome";
import LokaciWedding from './LokaciWedding';
import LokaciLogin from './LokaciLogin';
// import LokaciGetStarted from './LokaciGetStarted';
import Wedding from "./Wedding";
import {NavLink } from "react-router-dom";
import "./TODO.css";
import AllButtons from "./AllButtons";
// import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import LokaciiLogins from "./LokaciiLogins";


const LokaciNavbar = () => {
  return (
    <>
      <div className="maincontainer">
        <ul className="Navbar">
          <div className="second">
          <li><NavLink exact to="/">LokaciHome</NavLink></li>
          <li><NavLink exact to="/LokaciWedding">LokaciWedding</NavLink></li>
          <li><NavLink  exact to="/LokaciLogin">LokaciLogin</NavLink></li>
            <li><button id="started">LokaciStarted</button></li>
          </div>
          <br /><br /><br /><br /><br />
          <br /><br />
          <Wedding />
          <AllButtons/>
        </ul>
      </div>
    </>

  );
};
export default LokaciNavbar;