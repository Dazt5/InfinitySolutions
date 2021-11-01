import React, { useState } from 'react';
import { Ticket } from './Ticket';
import './style.css'
import { apiAxios } from '../../../../../config/api';
import { Link } from 'react-router-dom';

export const TicketList = () => {

    const [tickets, saveTickets] = useState([]);
    const [status, setStatus] = useState('all');

    useState(() => {

        const getTickets = async () => {

            try {

                const { data } = await apiAxios('/ticket');

                saveTickets(data.ticket);

            } catch (error) {
                console.log(error);
            }
        }
        getTickets();
    }, []);

    const filterTickets = status => setStatus(status)

    return (
        <main>
            <div className="container mt-5">
                <div className="row justify-content-left">
                    <div className="col-md-12">

                        <div className="d-flex justify-content-between align-items-center activity">
                            <div><span className="activity-done">Ticket totales({tickets.length})</span></div>
                            <div className="icons"> Filtre por estado: <i className="las la-bars allicon" onClick={() => filterTickets("all")}></i><i className="las la-check checkicon" onClick={() => filterTickets("success")}></i><i className="las la-clock waitingicon" onClick={() => filterTickets("waiting")}></i><i className="las la-times rejecticon" onClick={() => filterTickets("rejected")}></i></div>
                        </div>
                        <div>
                            <Link to={`/ticket/new`} className="btn btn-secondary">Crear ticket</Link>
                        </div>
                        <div className="mt-3">
                            <ul className="list list-inline">
                                {tickets.map(ticket => {
                                    if (ticket.status.name === status) {
                                        return (
                                            <Ticket
                                                key={ticket._id}
                                                ticket={ticket} />
                                        )
                                    } else if (status === "all") {
                                        return (
                                            <Ticket
                                                key={ticket._id}
                                                ticket={ticket} />
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}