import React, { Fragment, useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Sidebar, Header } from '../../';
import { apiAxios } from '../../../../config/api';

const layout = ({ history, children }) => {

    if (!localStorage.getItem('token')) {
        history.push('/login');
    }

    const [user, saveUser] = useState({
        name: '...',
        lastname: '...'
    });
 
    const getUser = async () => {
        try {
            const { data } = await apiAxios.get('/user');

            const { user } = data;

            saveUser(user)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        getUser();

    }, []);
    return (

        <Fragment>
            <Sidebar user={user} />
            <div className="main-content">
                <Header user={user} />
                {children}
            </div>
        </Fragment>
    )
}

export const Layout = withRouter(layout)