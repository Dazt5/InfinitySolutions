import React, { Fragment } from 'react';

import { NavBar } from '../components/common/NavBar'
import { LoginForm, Layout } from '../components/authForm';

const Login = () => (

    <Fragment>
        <NavBar login={true}/>
        <Layout>
            <LoginForm />
        </Layout>
    </Fragment>
);

export default Login;