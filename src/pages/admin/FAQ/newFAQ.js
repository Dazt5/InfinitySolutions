import React from 'react';
import { withRouter } from 'react-router-dom';
import {  Layout, NewFaqForm } from '../../../components/dashboard';

const newfaq = (props) => {

    return (
      
            <Layout >
        <NewFaqForm  props={props}/>
            </Layout>
     
    )
}

export default withRouter(newfaq)
