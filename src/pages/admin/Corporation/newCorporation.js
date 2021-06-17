import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { CorporationForm, Layout } from '../../../components/dashboard/'

const CorporationList = (props) => {

    return (
        <Fragment>
            <Layout props={props}>
                <CorporationForm new={true}/>
            </Layout>
        </Fragment>
    )
}

export default withRouter(CorporationList)

