import React from 'react';
import { Contacti } from './Contacti';
import { Location } from './Abouts';
import { Homes } from './Homes';
import { Route, Switch } from 'react-router-dom';
import { Menu } from './Menu';

export const Navbars = () => {
    return (
       <>
       <Menu/>
        <Switch>
        <Route exact path="/:city/:salonName" component={Location}></Route>
        <Route exact path="/contacti" component={Contacti}></Route>
        <Route exact path="/Homes" component={Homes}></Route>

        </Switch>
        </>
    )
}
