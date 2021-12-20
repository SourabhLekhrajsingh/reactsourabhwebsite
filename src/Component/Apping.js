import React  from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Loginn from "./Component/Loginn";
import Profile from "./Component/Profile";
import Location from './Component/Location';

// import Todo from './Component/Todo';
// { <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" link/>}

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import { Redirect, Route, Switch } from 'react-router';
// import Next from './Component/Next';
// import About from './Component/About';
// import Service from './Component/Service';
// import Contact from './Component/Contact';
// import Button from './Component/Button';
// import Form from './Component/Form';  
// import Details from './Component/Details';
// import FullDetails from './Component/FullDetails';
// import { useParams } from "react-router-dom";
// import FetchAPI from "./Component/FetchAPI";
// import Apps from './Component/Apps';


  const App = () => {
  return ( 
    <>
      <Router>
      <Switch>
        <Route exact path="/Loginn" component={Loginn}/>
        <Route exact path="/Profile" component={()=><Profile authorized={true}/>}
        />
        </Switch>
      </Router>
    </>
  );
};
export default App;