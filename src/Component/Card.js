import React from "react";
// import Detailing from "./Detailing";
import {useHistory} from 'react-router-dom';
import { useParams } from "react-router-dom";



const Card = props => {
  const history = useHistory();

  const handleRedirection  = () => {
    history.push('App/'+props.aa);
  }

    return
      <>
      <FullDetails/>
        <div className="card" id={props.aa}>
          <div className="card-body">
          <h5 className="card-title">Card title {props.aa}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
          <button onClick={handleRedirection} >Move</button>
        </div>
      </div>
      </>
    );
};
const FullDetails = () => {
  return(
      <>
          <h1>Hello</h1>
      </>
  );
};
export default Card; 