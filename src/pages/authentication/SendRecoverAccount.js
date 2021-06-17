import React, { Fragment } from 'react';
import { Layout, NavBar, SendRecoverAccountForm } from '../../components/authForm';

const SendRecoverAccount = () => {

    return (
        <Fragment>
            <NavBar login={true} />
            <Layout>
                <SendRecoverAccountForm />
            </Layout>
        </Fragment>
    )
}

export default SendRecoverAccount;