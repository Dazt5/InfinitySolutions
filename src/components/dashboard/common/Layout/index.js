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

    const [stateMenu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!stateMenu);
    }

    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    const getUser = async () => {
        try {
            const { data } = await apiAxios.get('/user');

            const { user } = data;

            saveUser(user)

        } catch (error) {
            history.push('/login');
            console.log(error);
        }
    }

    useEffect(() => {
        if (storedUser) {
            saveUser(storedUser);
        } else {
            getUser();
        }
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

export const Layout = withRouter(layout)