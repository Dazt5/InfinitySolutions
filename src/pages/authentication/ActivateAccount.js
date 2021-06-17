import React,{Fragment} from 'react';
import { withRouter } from 'react-router-dom';

import { Layout,NavBar,Activate } from '../../components/authForm';

const ActivateAccount = (props) => {

    const { token } = props.match.params;

    return (
        <Fragment>
            <NavBar login={true}/>
            <Layout>
                <Activate token={token}/>
            </Layout>
        </Fragment>
    )
}

export default withRouter(ActivateAccount);