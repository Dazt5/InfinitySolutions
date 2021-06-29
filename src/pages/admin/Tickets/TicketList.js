import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { AdminTicketList, Layout } from '../../../components/dashboard';

const TicketsList = (props) => {

    return (
        <Fragment>
            <Layout >
                <AdminTicketList props={props} />
            </Layout>
        </Fragment>
    )
}

export default withRouter(TicketsList)

