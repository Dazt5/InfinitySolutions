import React from 'react';
import { withRouter } from 'react-router-dom';
import { NewTicketForm, Layout } from '../../../../components/dashboard';

const NewTicket = (props) => {

    return (

        <Layout >
            <NewTicketForm props={props} />
        </Layout>

    )
}

export default withRouter(NewTicket)

