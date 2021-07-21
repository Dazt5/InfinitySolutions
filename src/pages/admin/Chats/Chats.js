import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { ChatPanel, Layout } from '../../../components/dashboard/'

const CorporationList = () => {

    return (
        <Fragment>
            <Layout>
                <ChatPanel/>
            </Layout>
        </Fragment>
    )
}

export default withRouter(CorporationList)

