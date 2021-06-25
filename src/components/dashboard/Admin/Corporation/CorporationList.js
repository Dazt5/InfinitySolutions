import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CorporationRow } from './';
import { apiAxios } from '../../../../config/api';

export const corporationAdminList = () => {

    const [corporation, saveCorporation] = useState([]);


    const desactiveCorporation = async (idCorporation) => {

        try {

            await apiAxios.patch(`/desactivate/corporation/${idCorporation}`);

            getCorporations();

        } catch (error) {
            console.log(error);
        }
    }

    const getCorporations = async () => {

        try {

            const { data } = await apiAxios.get('/corporation');

            const corporation = data.corporation;

            saveCorporation(corporation);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCorporations();

    }, [])  

    return (
        <main>
 
            <div className="card-table">
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
                                            desactiveCorporation={desactiveCorporation}
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


export const CorporationAdminList = withRouter(corporationAdminList)