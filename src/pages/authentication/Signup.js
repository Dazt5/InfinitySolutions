import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpForm, Layout,NavBar } from '../../components/authForm';


const Signup = (props) => (
    <Fragment>
        <NavBar login={true} />
        <Layout>
            <SignUpForm />
        </Layout>
    </Fragment>
);

export default withRouter(Signup);