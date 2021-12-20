import React,{useState} from 'react';
import Demo from './Demo';
import Location from './Location';
import "./TODO.css"





export const MainLocation = () => {
    const  [fetchLocation, setFetchLocation] = useState(false);  
    var mohan = 'sourabh chauhan'
    function detectAutoLocation(){
        console.log("hey");
        setFetchLocation(mohan);
        console.log(fetchLocation);    
    }
    
    return (
        <>
        { fetchLocation ? 
            <Demo/> 
        : 
            <div>Okk</div>
        }
        <Location/>
        <button onClick={detectAutoLocation} style={{color: "red"}} className="Detect">Detect</button>
        </>
    )
}
export default MainLocation;
