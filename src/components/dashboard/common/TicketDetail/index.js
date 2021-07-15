import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import { apiAxios } from '../../../../config/api';
import { Context } from '../../../../context/Context';
import gravatar from '../../../../utils/gravatar';
import './style.css';

export const TicketDetail = ({ props }) => {

    const { idTicket } = props.match.params;

    const [ticket, saveTicket] = useState({
        corporation: {},
        user: {
            email: 'email@email.com'
        },
        status: {}
    });
    const [statuses, saveStatuses] = useState([]);

    const [auth] = useContext(Context);

    useEffect(() => {

        const getTicket = async () => {

            try {

                const { data } = await apiAxios.get(`/ticket/${idTicket}`);
                saveTicket(data.ticket);

            } catch (error) {
                console.log(error);
            }
        }
        getTicket();

        if (auth.user.auth_level === 2) {
            const getStatuses = async () => {
                try {
                    const { data } = await apiAxios.get(`/status/`);
                    saveStatuses(data.status);

                } catch (error) {
                    console.log(error);
                }
            }
            getStatuses();
        }
    }, [auth])

    return (
        <main className="body ticket-details">
            <div className="container-fluid mt-100">
                <div className="row">
                    <div className={auth.user.auth_level && auth.user.auth_level === 2 ? "col-md-9" : "col-md-12"}>
                        <div className="card ticket-detail mb-4">
                            <div className="card-header ticket-detail">
                                <div className="media flex-wrap w-100 align-items-center"> <img src={gravatar(ticket.user.email)} className="d-block ui-w-40 rounded-circle" alt="" />
                                    <div className="media-body ml-3"> {ticket.user.name} {ticket.user.lastname}<a href="" data-abc="true"> </a>
                                    </div>
                                    <div className="text-muted small ml-3">
                                        <div>Ticket generado el <strong>{dayjs(ticket.create_at).format('DD-MM-YY')}</strong></div>
                                        <div><strong>A las </strong> {dayjs(ticket.create_at).format('hh:mm A')}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body ticket-detail">
                                <h4> {ticket.subject}</h4>
                                <p> {ticket.description} </p>
                            </div>
                            <div className="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                                {
                                    ticket.status.name === "waiting" &&
                                    <div className="px-4 pt-3"><i className="las la-clock waitingicon"> <p> En espera</p></i></div>
                                }
                                {
                                    ticket.status.name === "success" &&
                                    <div className="px-4 pt-3"><i className="las la-check-circle checkicon"><p>Solucionado</p></i></div>
                                }
                                {
                                    ticket.status.name === "reject" &&
                                    <div className="px-4 pt-3"><i className="fa fa-check-times rejecticon"><p>Rechazado</p></i></div>
                                }
                                <div className="px-4 pt-3"> <button type="button" className="btn btn-primary">Reply</button> </div>
                        </div>
                    </div>
                </div>
                {
                    auth.user.auth_level && auth.user.auth_level === 2 &&
                    <div className="col-md-3">
                        <div className="card ticket-detail mb-4">
                            <div className="container-form">
                                <div className="title">Cambiar estado</div>
                                <form>
                                    <div className="input-box">

                                        <span>Seleccione una estado</span>
                                        <select name="corporation" >
                                            <option value="">Seleccione un estado</option>
                                            {statuses.map(status => (
                                                <option key={status._id} value={status._id}>{status.name}</option>
                                            ))}
                                        </select>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
            </div>
        </main>
    )
}