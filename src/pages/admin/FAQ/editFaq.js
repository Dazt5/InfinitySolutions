import React from 'react';
import { withRouter } from 'react-router-dom';
import {  Layout, EditFaqForm } from '../../../components/dashboard';

const editfaq = (props) => {

    return (
      
            <Layout >
        <EditFaqForm  props={props}/>
            </Layout>
     
    )
}

export default withRouter(editfaq)
