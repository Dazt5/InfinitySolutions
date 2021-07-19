import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { NewAdminForm, Layout } from '../../../components/dashboard';

const adminuserForm = (props) => {

    return (
        <Fragment>
            <Layout >
                <NewAdminForm/>
                </Layout>
        </Fragment>
    )
}

export default withRouter(adminuserForm)
