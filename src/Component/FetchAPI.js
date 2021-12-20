import React,{useEffect} from "react";


const UseEffectAPI=()=>{
    const getUsers = async()=>{
        const response =fetch('http://ip-api.com/json/24.48.0.1').then(response => {
            console.log(response );
        })
    }
    useEffect(() => {
        getUsers();
        });
    return(
        <>
        <h1>mohan</h1>
        </>

    )
};
export default UseEffectAPI;