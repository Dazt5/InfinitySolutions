import React,{Fragment} from 'react';
import { Layout, NavBar, ResendActivateAccountForm } from '../../components/authForm';

const ResendActivateAccount = () => {

    return (
        <Fragment>
            <NavBar login={true} />
            <Layout>
                <ResendActivateAccountForm />
            </Layout>
        </Fragment>
    )
}

export default ResendActivateAccount;