import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { CorporationAdminList, Layout } from '../../../components/dashboard/'

const CorporationList = (props) => {

    return (
        <Fragment>
            <Layout props={props}>
                <CorporationAdminList/>
            </Layout>
        </Fragment>
    )
}

export default withRouter(CorporationList)

