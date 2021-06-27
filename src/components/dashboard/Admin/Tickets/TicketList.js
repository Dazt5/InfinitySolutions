import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../config/api';
import TicketRow from '../AdminPanel/LastTickets/TicketRow';

export const TicketList = () => {

    const [ticket, saveTicket] = useState([]);
    const [status, setStatus] = useState('all')

    useEffect(() => {

        const getAllTickets = async () => {

            try {

                const { data } = await apiAxios.get('/ticket');

                saveTicket(data.ticket);

            } catch (error) {
                console.log(error.request);
            }
        }

        getAllTickets();

    }, []);

    return (

        <main>

            <div className="projects">
                <div className="card-table">
                    <div className="card-header">
                        <h2>Ultimos Tickets Pendientes</h2>

                        <button>En espera <i className="las la-clock">

                        </i> </button>

                        <button>Corregidos <i className="las la-check">

                        </i> </button>


                        <button>Anulados <i className="las la-times">

                        </i> </button>


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
                                        {ticket.map(ticket => (
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

        </main>
    )

}