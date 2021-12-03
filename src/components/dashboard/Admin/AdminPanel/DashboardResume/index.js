import React, { Fragment, useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';

export const DashboardResume = () => {
    const [resume, saveResume] = useState({
        users: 0,
        tickets: {
            total: 0,
            waiting: 0,
            success: 0
        }
    });
    const getResume = async () => {
        try {
            const { data } = await apiAxios.get('/admin/dashboard');
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

                {resume &&
                    <Fragment>
                        <div className="card-single">
                            <div>
                                <h1>{resume.tickets.total}</h1>
                                <span>Tickets Totales</span>
                            </div>

                        </div>
                        <div className="card-single">
                            <div>
                                <h1>{resume.tickets.waiting}</h1>
                                <span>Tickets en espera</span>
                            </div>

                        </div>

                        <div className="card-single">
                            <div>
                                <h1>{resume.tickets.success}</h1>
                                <span>Tickets resueltos</span>
                            </div>

                        </div>

                        <div className="card-single">
                            <div>
                                <h1>{resume.users}</h1>
                                <span>Usuarios registrados</span>
                            </div>
                        </div>
                    </Fragment>
                }
            </div>
        </Fragment>
    )

}