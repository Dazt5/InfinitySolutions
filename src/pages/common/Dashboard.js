import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { AdminPanel, Layout, UserPanel } from '../../components/dashboard'
import { apiAxios } from '../../config/api';

const Dashboard = (props) => {

    const [user, saveUser] = useState({
        name: '...',
        lastname: '...'
    });

    useEffect(() => {

        const getUser = async () => {
            try {
                const { data } = await apiAxios.get('/user');

                const user = data.user;

                saveUser(user)

            } catch (error) {
                console.log(error);
                localStorage.removeItem('token');
                saveAuth({
                    token: '',
                    auth: false,
                    user:{}
                })
            }
        }

        getUser();

    }, []);

    return (
        <Fragment>
            <Layout props={props}>
                {user.auth_level === 2 ? <AdminPanel /> : <UserPanel />}
            </Layout>
        </Fragment>
    )
}

export default withRouter(Dashboard)

