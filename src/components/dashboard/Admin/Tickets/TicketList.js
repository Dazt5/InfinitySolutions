import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../config/api';
import TicketRow from '../AdminPanel/LastTickets/TicketRow';

export const AdminTicketList = () => {

    const [ticket, saveTicket] = useState([]);
    const [status, setStatus] = useState('all');

    useEffect(() => {

        const getAllTickets = async () => {

            try {

                const { data } = await apiAxios.get('/admin/ticket');

                saveTicket(data.tickets);

            } catch (error) {
                console.log(error.request);
            }
        }

        getAllTickets();

    }, []);

    const filterTickets = status => setStatus(status)

    return (
        <main>
            <div className="projects">
                <div className="card-table">
                    <div className="card-header sections">
                        <h2>Lista completa de Tickets</h2>

                        <button onClick={() => filterTickets("all")}>Todos</button>

                        <button onClick={() => filterTickets("waiting")}>En espera</button>

                        <button onClick={() => filterTickets("success")}>Solucionados</button>

                        <button onClick={() => filterTickets("rejected")}>Rechazados</button>
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
                                        {ticket.map(ticket => {

                                            if (ticket.status.name === status) {
                                                return (
                                                    <TicketRow
                                                        key={ticket._id}
                                                        ticket={ticket} />
                                                )
                                            } else if (status === "all") {
                                                return (
                                                    <TicketRow
                                                        key={ticket._id}
                                                        ticket={ticket} />
                                                )
                                            }
                                        })}
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