import React from 'react';
import Location from './Location';
import Img from './lokcai.png';
import Image from './salon.jpg';
import Images from './location.png';


import "./Lokcai.css";

export const LokaciNav = () => {
    return (
        <div className="Maincontainer">
            <div className="left">
            <img src={Img} className="logo" alt="image" />
            <div className="text">
            <div className="move"> 
            <h1>Looking for <span class="change-content"></span></h1>
            </div>
            <h2>Discover best salon, hair-stylist and book your appointment in real-time.</h2>
            <div className="booking">
            <button className="book">Book Now</button>
             </div>
             <Location/>
            </div>
            
            </div>
            <div className="right">
            <img src={Image} alt="image"/>
            </div>
        </div>

        
    )
}
export default LokaciNav;
