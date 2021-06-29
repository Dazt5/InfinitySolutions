import React, { useState } from 'react';
import { Ticket } from './Ticket';
import './style.css'
import { apiAxios } from '../../../../../config/api';
import { Link } from 'react-router-dom';

export const TicketList = () => {

    const [tickets, saveTickets] = useState([]);

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
    })

    return (
        <main>
            <div className="container mt-5">
                <div className="row justify-content-left">
                    <div className="col-md-12">

                        <div className="d-flex justify-content-center align-items-center activity">
                            <div><span className="activity-done">Ticket totales({tickets.length})</span></div>
                            <div><span className="activity-done">Ticket totales({tickets.length})</span></div>
                            <div className="icons"><i className="las la-check"></i><i className="las la-clock"></i><i className="las la-times"></i></div>
                        </div>
                        <div>
                            <Link to={`/ticket/new`} className="btn btn-secondary">Crear ticket</Link>
                        </div>
                        <div className="mt-3">
                            <ul className="list list-inline">
                                {tickets.map(ticket => (
                                    <Ticket
                                        key={ticket._id}
                                        ticket={ticket}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}