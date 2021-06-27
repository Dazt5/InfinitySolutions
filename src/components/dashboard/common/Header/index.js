import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../../../../context/Context';
import adminIcon from '../../../../assets/static/admin.png';
import userIcon from '../../../../assets/static/user.jpg';
import gravatar from '../../../../utils/gravatar';


const header = ({ user, history }) => {

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
                {user
                    ?
                    user.auth_level === 1
                        ?
                        <img src={gravatar(user.email)} width="50px" height="50px" alt="Avatar" />
                        :
                        <img src={adminIcon} width="30px" height="40px" alt="Avatar" />
                    :
                    <img src={userIcon} width="30px" height="40px" alt="Avatar" />
                }

                <div>
                    <h6>{`${user.name} ${user.lastname}`}</h6>
                    <small onClick={logout}
                        className="logout-btn"
                    >Cerrar Sesión</small>
                </div>
            </div>
        </header>
    )
}

export const Header = withRouter(header)