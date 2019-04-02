import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import SingleSeries from '../../containers/SingleSeries'
import Home from '../../containers/Home';
import Store from '../../containers/Store'

const Main = props => (
    <Switch>
        <Route exact path="/" render={props => 
            <div>
            {/* < Header {...props}/> */}
            <Home {...props}/>
            </div>
         } />
        <Route path="/equipment" render={props => 
            <div>
            <Store {...props}></Store>
            </div>
         } />
    </Switch>
);

export default Main;