import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import TicketList from './TicketList';

export const LastTickets = () => {

    const [tickets, saveTickets] = useState([]);

    useEffect(() => {

        const lastTickets = async () => {

            try {

                const { data } = await apiAxios.get('/ticket/status/waiting');

                const allTickets = data.allTickets;

                saveTickets(allTickets);

            } catch (error) {
                console.log(error.request);
            }
        }

        lastTickets();

    }, []);

    return (
        <div className="projects">
            <div className="card">
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
                                        <TicketList
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

/**
                       <table>
                            <thead>
                                <tr>
                                    <td>Titulo</td>
                                    <td>Corporacion</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                </tr>
                                <tr>


                                </tr>
                                <tr>
                                    <td><a className="ticket-link" href="#">Sin internet por 2 años</a></td>
                                    <td>Cantv</td>
                                    <td>
                                        <span className="status pending"></span>
                                        En Espera
                                    </td>
                                </tr>
                            </tbody>
                        </table>
 */