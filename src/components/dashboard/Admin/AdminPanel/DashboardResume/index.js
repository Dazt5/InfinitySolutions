import React, { Fragment, useEffect } from 'react';
import { apiAxios } from '../../../../../config/api';

export const DashboardResume = () => {

    const getResume = async () => {

        try {

            const { data } = await apiAxios.get('/admin/dashboard');

            console.log(data);

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
                        <h1>4</h1>
                        <span>Tickets resueltos</span>
                    </div>

                </div>

                <div className="card-single">
                    <div>
                        <h1>5</h1>
                        <span>Usuarios registrados</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}