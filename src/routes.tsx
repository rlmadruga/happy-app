import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import SheltersMap from './pages/SheltersMap';
import Shelter from './pages/Shelter';
import CreateShelter from './pages/CreateShelter';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={SheltersMap}/>
                <Route path="/shelters/create" exact component={CreateShelter}/>
                <Route path="/shelters/:id" component={Shelter}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;