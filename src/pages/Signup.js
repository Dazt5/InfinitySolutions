import React, { Fragment } from 'react';

import { NavBar } from '../components/common/NavBar'
import { SignUpForm, Layout } from '../components/authForm';

const Signup = () => (
    <Fragment>
        <NavBar signup={true} />
        <Layout>
            <SignUpForm />
        </Layout>
    </Fragment>
);

export default Signup;