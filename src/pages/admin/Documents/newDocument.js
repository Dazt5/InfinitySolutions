import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, NewDocumentForm } from '../../../components/dashboard'


const NewDocument = (props) => (

    <Layout>
        <NewDocumentForm props={props}/>
    </Layout>
)

export default withRouter(NewDocument);