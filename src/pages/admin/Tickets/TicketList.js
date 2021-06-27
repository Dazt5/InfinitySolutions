import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { TicketList, Layout } from '../../../components/dashboard';

const TicketsList = (props) => {

    return (
        <Fragment>
            <Layout >
                <TicketList props={props} />
            </Layout>
        </Fragment>
    )
}

export default withRouter(TicketsList)

