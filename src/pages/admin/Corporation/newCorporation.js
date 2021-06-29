import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { NewCorporationForm, Layout } from '../../../components/dashboard/'

const NewCorporation = (props) => {

    return (
        <Fragment>
            <Layout props={props}>
                <NewCorporationForm/>
            </Layout>
        </Fragment>
    )
}

export default withRouter(NewCorporation)

