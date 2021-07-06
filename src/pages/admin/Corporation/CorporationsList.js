import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { CorporationAdminList, Layout } from '../../../components/dashboard/'

const CorporationList = () => {

    return (
        <Fragment>
            <Layout>
                <CorporationAdminList/>
            </Layout>
        </Fragment>
    )
}

export default withRouter(CorporationList)

