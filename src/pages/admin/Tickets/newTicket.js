import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { NewTicketForm, Layout } from '../../../components/dashboard';

const newticket = (props) => {

    return (
      
            <Layout >
        <NewTicketForm  props={props}/>
            </Layout>
     
    )
}

export default withRouter(newticket)

