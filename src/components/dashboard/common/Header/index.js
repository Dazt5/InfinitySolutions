import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../../../../context/Context';

const header = ({user, history}) => {

    const [auth, saveAuth] = useContext(Context);

    const logout = () => {
        saveAuth({
            auth: false,
            token: ''
        });

        localStorage.setItem('token', '');
        history.push('/login');
    }



    return (
        <header>
            <h2>
                <label htmlFor="nav-toggle">
                    <span className="nav-menu las la-bars"></span>
                </label>
                    Dashboard
            </h2>

            <div className="user-wrapper">
                <img src="https://avatars.githubusercontent.com/u/63359361?s=400&u=91c4c50b44f291274d094deb78cd02f4ab2a1c6a&v=4" width="30px" height="40px" alt="Avatar" />

                <div>
                    <h4>{`${user.name} ${user.lastname}`}</h4>
                    <small onClick={logout}
                        className="logout-btn"
                    >Cerrar Sesión</small>
                </div>
            </div>
        </header>
    )
}

export const Header = withRouter(header)