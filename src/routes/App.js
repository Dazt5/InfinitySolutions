import React from 'react';

import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup'


const App = () => (

    <Router>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        </Switch>
    </Router>
)
export default App;