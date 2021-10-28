import React, { Fragment, useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';

export const DashboardResume = () => {
    const [Resume, saveResume] = useState({});
    const getResume = async () => {

        try {

            const { data } = await apiAxios.get('/admin/dashboard');
            console.log(data);
            saveResume(data.resume);
           
           
        } catch (error) {
            console.log(error);
        }
    }
    
    
    useEffect(() => {

        getResume();

    }, []);

    return (
        <Fragment>
            <h3>Ultimos 7 dias</h3>
            <div className="cards">
                <div className="card-single">
                    <div>
                        <h1>7</h1>
                        <span>Tickets Totales</span>
                    </div>

                </div>
                <div className="card-single">
                    <div>
                        <h1>3</h1>
                        <span>Tickets en espera</span>
                    </div>

                </div>

                <div className="card-single">
                    <div>
                        <h1>0</h1>
                        <span>Tickets resueltos</span>
                    </div>

                </div>

                <div className="card-single">
                    <div>
                        <h1>{Resume.users}</h1>
                        <span>Usuarios registrados</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}