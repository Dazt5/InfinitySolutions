import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CorporationRow } from './';
import { apiAxios } from '../../../../config/api';

export const CorporationAdminList = () => {

    const [corporation, saveCorporation] = useState([]);

    useEffect(() => {

        const getCorporations = async () => {

            try {

                const { data } = await apiAxios.get('/corporation');

                const corporation = data.corporation;

                saveCorporation(corporation);

            } catch (error) {
                console.log(error);
            }
        }

        getCorporations();



    }, [])  

    return (
        <main>
            {/* STYLE FOR USERS
            <div className="card-header">
                <h2 className="header-text">Compañias registradas</h2>

                <Link to={'/admin/corporation/new'}><button className="header-button">Agregar una<span className="las-la-arrow-right">

                </span> </button></Link>
            </div>
            <div className="cards">
                {corporation.map(corp => (
                    <CorporationCard
                        key={corp._id}
                        corp={corp}
                    />
                ))}
            </div>
            */}

            <div className="card">
                <div className="card-header">
                    <h2>Compañias registradas</h2>

                    <Link to={'/admin/corporation/new'}><button className="header-button">Agregar una<span className="las-la-arrow-right">

                    </span> </button></Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">

                        <div className="table-wrapper">
                            <table className="fl-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nombre</th>
                                        <th>RIF</th>
                                        <th>Descripción</th>
                                        <th>Activa</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {corporation.map(corp => (
                                        <CorporationRow
                                            key={corp._id}
                                            corp={corp}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}