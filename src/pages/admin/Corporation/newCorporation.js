import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { NewCorporationForm, Layout } from '../../../components/dashboard/'

const newCorporation = (props) => {

    return (
        <Fragment>
            <Layout props={props}>
                <NewCorporationForm/>
            </Layout>
        </Fragment>
    )
}

export default withRouter(newCorporation)

