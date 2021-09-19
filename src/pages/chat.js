import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from '../components/dashboard';
import { Messenger } from '../components/popup/messenger/messenger';

const Chat = () => {

    return (
        <Layout>
            <Messenger />
        </Layout>
    )
}

export default withRouter(Chat)

