import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, NavBar, RecoverAccountForm } from '../../components/authForm';

const SendRecoverAccount = (props) => {

    return (
        <Fragment>
            <NavBar login={true} />
            <Layout props={props}>
                <RecoverAccountForm
                    props={props}
                />
            </Layout>
        </Fragment>
    )
}

export default withRouter(SendRecoverAccount);