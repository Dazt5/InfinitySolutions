import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import TicketRow from './TicketRow';

export const LastTickets = () => {

    const [tickets, saveTickets] = useState([]);

    useEffect(() => {

        const lastTickets = async () => {

            try {

                const { data } = await apiAxios.get('/ticket/status/waiting');

                saveTickets(data.allTickets);

            } catch (error) {
                console.log(error.request);
            }
        }

        lastTickets();

    }, []);

    return (
        <div className="projects">
            <div className="card-table">
                <div className="card-header">
                    <h2>Ultimos Tickets Pendientes</h2>

                    <button>Ver todos <span className="las-la-arrow-right">

                    </span> </button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">

                        <div className="table-wrapper">
                            <table className="fl-table">
                                <thead>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>Corporación</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickets.map(ticket => (
                                        <TicketRow
                                            key={ticket._id}
                                            ticket={ticket} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}