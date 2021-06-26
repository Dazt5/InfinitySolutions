import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { AdminPanel, Layout } from '../../components/dashboard/';

import {Tickets} from '../../components/dashboard/Admin/index';

const tickets = (props) => {

    return (
        <Fragment>
            <Layout >
     <Tickets props={props} />
                </Layout>
        </Fragment>
    )
}

export default withRouter(tickets)

