import React from 'react';


export const SalonNearMe = () => {
    const lat = localStorage.getItem("lat");
    const lng = localStorage.getItem("lng");
    return (
        <div>
            Hey I'm at near me page
            {lat}
            {lng}
        </div>
    )
}
export default SalonNearMe;
