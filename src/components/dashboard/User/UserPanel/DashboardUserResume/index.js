import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';

export const DashboardUserResume = () => {

    const [resume, saveResume] = useState({
        tickets: {
            total: 0,
            waiting: 0,
            success: 0
        }
    });

    const getResume = async () => {
        try {
            const { data } = await apiAxios.get('/user/dashboard');
            saveResume(data.resume);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getResume();
    }, [])

    return (
        <div className="cards">
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
        </div>
    )

}