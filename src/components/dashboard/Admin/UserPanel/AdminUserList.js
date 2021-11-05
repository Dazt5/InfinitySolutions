import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../config/api';
import { AdminUserRow } from './AdminUserRow';
import { Link } from 'react-router-dom';
export const AdminUserList = () => {

    const [users, saveUsers] = useState([]);

    const getAllUsers = async () => {

        const { data } = await apiAxios.get('/admins');

        saveUsers(data.users);
    }

    useEffect(() => {

     

        getAllUsers();

    }, [])

    
    const desactiveUser = async (userid) => {

        try {

            await apiAxios.post(`/admin/activate/${userid}`);

            getAllUsers();

        } catch (error) {
            console.log(error);
        }
    }

console.log(users);
    return (
        <main>
            <div className="card-table">
                <div className="card-header">
                    <h2>Usuarios registrados</h2>
                    <Link to={"/admin/user"} className="btn btn-secondary">Crear Nuevo Admin</Link>
                    {/*
            <Link to={'/admin/corporation/new'}><button className="header-button">Agregar una<span className="las-la-arrow-right">

                    </span> </button></Link>
                */}
                </div>
                <div className="card-body">
                    <div className="table-responsive">

                        <div className="table-wrapper">
                            <table className="fl-table">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Email</th>
                                        <th>Número de teléfono</th>
                                        <th>Fecha de creación</th>
                                        <th>Ultimo Acceso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => (
                                            <AdminUserRow
                                                key={user._id}
                                                user={user}
                                                desactiveUser={desactiveUser}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}