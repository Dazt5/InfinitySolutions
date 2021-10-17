import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, ChatsPanel } from '../../../components/dashboard/'


const Chats = () => {

    return (
            <Layout>
                <ChatsPanel/>
            </Layout>
    )
}

export default withRouter(Chats)

