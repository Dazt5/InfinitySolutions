import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { LoginForm, Layout, NavBar } from '../../components/authForm';

const Login = (props) => {

    return (
        <Fragment>
            <NavBar signup={true} />
            <Layout props={props}>
                <LoginForm />
            </Layout>
        </Fragment>
    )
};

export default withRouter(Login);