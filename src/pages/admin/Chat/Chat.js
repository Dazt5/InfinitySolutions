import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from '../../../components/dashboard';
import  {Message } from '../../../components/popup/message/message';

const Chating = () => {

    return (

        <Layout >
    
       <Message/>

        </Layout>

    )
}

export default withRouter(Chating)