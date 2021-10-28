import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Changeinfo } from '../components/dashboard';

const ChangeProfile = () => {
    return (
        <Layout>
            <main>
         <Changeinfo/>
              </main>
        
        </Layout>
    )
}

export default withRouter(ChangeProfile)
