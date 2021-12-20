import React from 'react'
import { useHistory } from 'react-router'

function Loginnew() {
  let history = useHistory();
  

  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="username" />
      <button onClick={()=>{
        history.push("/Homing")
      }}>
        Login
      </button>

    </div>
  );
}
export default Loginnew;
