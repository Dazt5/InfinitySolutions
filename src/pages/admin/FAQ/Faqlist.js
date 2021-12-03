import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, FAQList } from '../../../components/dashboard';

const faqlist = (props) => {

    return (

        <Layout >
            <FAQList props={props} />
        </Layout>

    )
}

export default withRouter(faqlist)
