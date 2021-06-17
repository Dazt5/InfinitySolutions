import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { AdminPanel, Layout } from '../../components/dashboard/'

const Dashboard = (props) => {

    return (
        <Fragment>
            <Layout props={props}>
                <AdminPanel/>
            </Layout>
        </Fragment>
    )
}

export default withRouter(Dashboard)

