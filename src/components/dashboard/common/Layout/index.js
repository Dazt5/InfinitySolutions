import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Sidebar, Header } from '../../';
import { apiAxios } from '../../../../config/api';
import { HttpRequestOnActionHandler } from '../../../../utils/HttpHandler';

const Layouts = ({ history, children }) => {

    if (!localStorage.getItem('token')) {
        history.push('/login');
    }

    const [user, saveUser] = useState({
        name: '...',
        lastname: '...'
    });

    const [stateMenu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!stateMenu);
    }

    const getUser = async () => {
        try {
            const { data } = await apiAxios.get('/user');

            const { user } = data;

            saveUser(user)

        } catch (error) {
            HttpRequestOnActionHandler(error,history)
        }
    }

    useEffect(() => {

        getUser();
// eslint-disable-next-line
    }, []);
    return (

        <Fragment>
            <Sidebar
                user={user}
                stateMenu={stateMenu}
            />
            <div className="main-content">
                <Header user={user}
                    toggleMenu={toggleMenu}
                />
                {children}
            </div>
        </Fragment>
    )
}

export const Layout = withRouter(Layouts)