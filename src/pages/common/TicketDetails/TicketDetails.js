import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, TicketDetail } from '../../../components/dashboard'

const TicketDetails = props => (

    <Layout>
        <TicketDetail props={props} />
    </Layout>
)

export default withRouter(TicketDetails);