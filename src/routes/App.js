import React, { Fragment, useContext } from 'react';

import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom';

import { Context, Provider } from '../context/Context';

/* Auth Components */
import Login from '../pages/authentication/Login';
import Signup from '../pages/authentication/Signup';
import ActivateAccount from '../pages/authentication/ActivateAccount';
import ResendActivateAccount from '../pages/authentication/ResendAccountActivation';
import SendRecoverAccount from '../pages/authentication/SendRecoverAccount';
import RecoverAccount from '../pages/authentication/RecoverAccount';

/* Admin Components */
import Dashboard from '../pages/admin/Dashboard'
import CorporationList from '../pages/admin/Corporation/CorporationsList';
import newCorporation from '../pages/admin/Corporation/newCorporation';
import editCorporation from '../pages/admin/Corporation/editCorporation';
import UsersList from '../pages/admin/Users/UsersList';

const App = () => {

    const [auth, saveAuth] = useContext(Context);

    return (
        <Router>
            <Provider value={[auth, saveAuth]}>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/activate/:token" component={ActivateAccount} />
                    <Route exact path="/send/activate" component={ResendActivateAccount} />
                    <Route exact path="/send/recover" component={SendRecoverAccount} />
                    <Route exact path="/recover/:token" component={RecoverAccount} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/admin/corporation" component={CorporationList} />
                    <Route exact path="/admin/corporation/new" component={newCorporation} />
                    <Route exact path="/admin/corporation/edit/:id" component={editCorporation} />
                    <Route exact path="/admin/users" component={UsersList} />

                    {/*<Route exact path="/corporation/:id" component={} />*/}
                </Switch>
            </Provider>
        </Router>
    )
}
export default App;