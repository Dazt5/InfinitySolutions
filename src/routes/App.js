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

/* Common Components */
import Dashboard from '../pages/common/Dashboard'
import CorporationProfile from '../pages/common/CorporationProfile';

/* Admin Components */
import CorporationList from '../pages/admin/Corporation/CorporationsList';
import newCorporation from '../pages/admin/Corporation/newCorporation';
import editCorporation from '../pages/admin/Corporation/editCorporation';
import UsersList from '../pages/admin/Users/UsersList';
import DocumentLists from '../pages/admin/Documents/DocumentLists';
import SelectCorporation from '../pages/admin/Documents/SelectCorporation';

/* User Components */
import ListCardCorporation from '../pages/User/ListCardCorporation';

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

                    {/*User Routes */}
                    <Route exact path="/corporation" component={ListCardCorporation} />

                    {/*Admin Routes*/}
                    <Route exact path="/admin/corporation" component={CorporationList} />
                    <Route exact path="/admin/corporation/new" component={newCorporation} />
                    <Route exact path="/admin/corporation/edit/:id" component={editCorporation} />
                    <Route exact path="/admin/users" component={UsersList} />
                    <Route exact path="/admin/document" component={SelectCorporation} />
                    <Route exact path="/corporation/:idCorporation" component={CorporationProfile} />
                    <Route exact path="/admin/document/:idCorporation" component={DocumentLists} />

                </Switch>
            </Provider>
        </Router>
    )

}


export default App;