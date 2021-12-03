import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/static/logo-blanco.png';
import Logosmall from '../../../../assets/static/logo-small.png';

export const Sidebar = ({ user, stateMenu }) => {

    if (!user) {
        return null;
    }

    return (
        <Fragment>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    {stateMenu ?
                        <img src={Logosmall} alt="Logo infinity Solutions" />
                        :
                        <img src={Logo} alt="Logo pequeño infinity Solutions" />
                    }

                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link className="active" to={"/dashboard"}>
                                <span className="las la-igloo"></span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            {user && user.auth_level === 2
                                &&
                                <Link to={"/admin/ticket"}>
                                    <span className="las la-users"></span>
                                    <span>Tickets</span>
                                </Link>
                            }
                            {user && user.auth_level === 1 &&

                                <Link to={"/ticket"}>
                                    <span className="las la-users"></span>
                                    <span>Mis Tickets</span>
                                </Link>
                            }

                        </li>
                        <li>
                            {user && user.auth_level === 2 &&
                                <Link to={"/admin/corporation"}>
                                    <span className="las la-clipboard-list"></span>
                                    <span>Corporaciones</span>
                                </Link>
                            }

                            {user && user.auth_level === 1 &&
                                <Link to={"/corporation"}>
                                    <span className="las la-clipboard-list"></span>
                                    <span>Corporaciones</span>
                                </Link>
                            }
                        </li>

                        {user && user.auth_level === 2 &&
                            <Fragment>
                                <li>
                                    <Link to={"/admin/document"}>
                                        <span className="las la-clipboard"></span>
                                        <span>Documentos</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/admin/users"}>
                                        <span className="las la-user-circle"></span>
                                        <span>Usuarios</span>
                                    </Link>
                                </li>
                            </Fragment>
                        }

                        {user && user.auth_level === 2 &&
                            <Fragment>
                                <li>
                                    <Link to={"/admin/adminusers"}>
                                        <span className="las la-user-astronaut"></span>
                                        <span>Admins</span>
                                    </Link>
                                </li>
                            </Fragment>
                        }

                        {user && user.auth_level === 2 &&
                            <Fragment>
                                <li>
                                    <Link to={"/admin/chats"}>
                                        <span className="las la-clipboard"></span>
                                        <span>Chats</span>
                                    </Link>
                                </li>
                            </Fragment>
                        }
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}