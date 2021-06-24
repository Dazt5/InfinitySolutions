import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = ({ user }) => {

    return (
        <Fragment>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="las la-infinity"></span> <span>Infinity Solutions</span></h2>
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
                            <Link to={""}>
                                <span className="las la-users"></span>
                                {user.auth_level == 2 ? <span>Tickets</span> : <span>Mis Tickets</span>}
                            </Link>
                        </li>
                        <li>

                            {user.auth_level === 2 ?
                                <Link to={"/admin/corporation"}>
                                    <span className="las la-clipboard-list"></span>
                                    <span>Corporaciones</span>
                                </Link>
                                :
                                <Link to={"/corporation"}>
                                    <span className="las la-clipboard-list"></span>
                                    <span>Corporaciones</span>
                                </Link>

                            }

                        </li>

                        {user.auth_level == 2 &&
                            <Fragment>
                                <li>
                                    <Link to={""}>
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

                    </ul>
                </div>
            </div>
        </Fragment>
    )
}