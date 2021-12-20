import React from "react";
import { Redirect, useHistory } from "react-router";




function Profile() {

    let history = useHistory();
    
    
    const authenticationReq = () => {
        const token = localStorage.getItem('Name');
        if(token===null){
            history.push('./Loginn');
        }
    }
    authenticationReq();
   

    const remove = () => {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
        authenticationReq();
    };


    return (
        <>
            {localStorage.getItem('Name') && (
                <div>
                    Name: <p>{localStorage.getItem('Name')}</p>
                </div>
            )}
            <div>
                <button onClick={remove}>Logout</button>
            </div>
        </>
    );
}
export default Profile;