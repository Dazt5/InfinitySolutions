import React, { useEffect, useState } from 'react';
import { apiAxios } from '../config/api';

const Context = React.createContext([{}, () => { }]);

const Provider = props => {

    const [auth, saveAuth] = useState({
        token: '',
        auth: false,
        user:{}
    });

    useEffect(() => {
        const token = localStorage.getItem('token')
        const verifySession = async () => {
            if (token) {
                try {
                    const { data } = await apiAxios.get('/user');

                    const {user} = data

                    if (user) {
                        saveAuth({
                            auth: true,
                            token,
                            user
                        })
                    }


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
        }
        verifySession();
    }, [])

    return (
        <Context.Provider value={[auth, saveAuth]}>
            {props.children}
        </Context.Provider>
    )
}


export { Context, Provider }