import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from '../../../components/dashboard';
import { Messenger } from '../../../components/popup/index';

const Chat = (props) => {

    return (
        <Layout >
            <Messenger
            props={props}
            />
        </Layout>
    )
}

export default withRouter(Chat)