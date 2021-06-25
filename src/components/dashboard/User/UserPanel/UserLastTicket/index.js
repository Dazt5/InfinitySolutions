import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import { TicketRow } from './TicketRow';

export const UserLastTicket = () => {

    const [tickets, saveTicket] = useState([]);


    useEffect(() => {
        const getUserTicket = async () => {

            const { data } = await apiAxios('/ticket');

            saveTicket(data.ticket);

        }

        getUserTicket();
    }, []);

    return (
        <div className="projects">
            <div className="card-table">
                <div className="card-header">
                    <h2>Ultimos tickets realizados</h2>

                    <button>Ver todos <span className="las-la-arrow-right">

                    </span> </button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">

                        <div className="table-wrapper">

                            {tickets.length
                                ?
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
                                :

                                <h4>No hay tickets registrados</h4>
                            
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}