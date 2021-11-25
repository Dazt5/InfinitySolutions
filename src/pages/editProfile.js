import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Changeinfo } from '../components/dashboard';

const ChangeProfile = (props ) => {
    return (
        <Layout>
            <main>
                <Changeinfo
                    props={props}
                />
            </main>

        </Layout>
    )
}

export default withRouter(ChangeProfile)
