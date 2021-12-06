import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../config/api';
import gravatar from '../../../../utils/gravatar';
import './style.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import TicketResponseRow from '../TicketDetail/TicketResponseRow';
import Swal from 'sweetalert2';

export const TicketDetail = ({ props }) => {

    const { idTicket } = props.match.params;

    const [addData, saveData] = useState('');

    const [status, saveStatus] = useState({});

    const [reply, saveReply] = useState('');

    const [ticket, saveTicket] = useState({
        corporation: {},
        user: {
            email: 'cargando...'
        },
        status: {}
    });
    const [statuses, saveStatuses] = useState([]);

    const [response, saveResponse] = useState([]);

    const user = JSON.parse(sessionStorage.getItem("user"));

    const handleChange = (e, editor) => {
        saveData(editor.getData());
        saveReply({
            ...reply,
            message: addData
        });
    }

    const readStatus = e => {
        saveStatus({
            ...status,
            [e.target.name]: e.target.value
        });

    }

    const getTicket = async () => {

        try {

            const { data } = await apiAxios.get(`/ticket/${idTicket}`);
            saveTicket(data.ticket);

        } catch (error) {
            console.log(error);
        }
    }

    const registerReply = async e => {
        e.preventDefault();

        try {
            const { data } = await apiAxios.post(`/ticket/${idTicket}/response`, reply);
            Swal.fire({
                icon: 'success',
                title: 'Agregado Correctamente',
                text: data.message
            });
            getResponse();


        } catch (error) {
            Swal.fire(
                'Error en registro',
                error.response.data.message,
                'error'
            );
        }
        saveData('');
    }

    const ElevarChat = async e => {
        e.preventDefault();

        try {
            const { data } = await apiAxios.post(`/admin/chat/activate/${idTicket}`);
            Swal.fire({
                icon: 'success',
                title: 'Elevado Correctamente',
                text: data.message
            });
        } catch (error) {
            Swal.fire(
                'Ha ocurrido un error',
                error.response.data.message,
                'error'
            );
        }
    }

    const ChangeStatus = async e => {
        e.preventDefault();

        try {
            const { data } = await apiAxios.patch(`/ticket/${idTicket}`, status);
            Swal.fire({
                icon: 'success',
                title: 'Agregado Correctamente',
                text: data.message
            });
            getTicket();

        } catch (error) {
            Swal.fire(
                'Error en registro',
                error.response.data.message,
                'error'
            );
        }
    }

    const getResponse = async () => {
        try {
            const { data } = await apiAxios.get(`/ticket/${idTicket}/response`);
            saveResponse(data.ticketResponse);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        if (user) {


            getTicket();


            getResponse();

            if (user && user.auth_level === 2) {
                const getStatuses = async () => {
                    try {
                        const { data } = await apiAxios.get(`/status`);
                        saveStatuses(data.status);
                        console.log(statuses);
                    } catch (error) {
                        console.log(error);
                    }
                }
                getStatuses();
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        <main className="body ticket-details">
            <div className="container-fluid mt-100">
                <div className="row">
                    <div className={user && user.auth_level === 2 ? "col-md-9" : "col-md-12"}>
                        <div className="card ticket-detail mb-4">
                            <div className="card-header ticket-detail">
                                <div className="media flex-wrap w-100 align-items-center"> <img src={gravatar(ticket.user.email)} className="d-block ui-w-40 rounded-circle" alt="" />
                                    <div className="media-body ml-3"> {ticket.user.name} {ticket.user.lastname}
                                    </div>
                                    <div className="text-muted small ml-3">
                                        <div>Ticket generado el <strong>{dayjs(ticket.create_at).format('DD-MM-YY')}</strong></div>
                                        <div><strong>A las </strong> {dayjs(ticket.create_at).format('hh:mm A')}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body ticket-detail">
                                {
                                    user && user.auth_level === 2 &&
                                    <form>
                                        <span>
                                            <i onClick={ElevarChat} className="las la-comments float-right"></i>

                                        </span>

                                    </form>
                                }
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
                                    ticket.status.name === "rejected" &&
                                    <div className="px-4 pt-3"><i className="las la-times rejecticon"><p>Rechazado</p></i></div>
                                }

                                {ticket.status.name === "waiting" &&
                                    <div className="px-4 pt-3"> <button onClick={registerReply} type="submit" className="btn btn-primary">Reply</button> </div>

                                }

                            </div>

                            {ticket.status.name === "waiting" &&

                                <div className="black-text">
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={addData}
                                        onChange={(e, editor) => { handleChange(e, editor) }}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                    {
                        user && user.auth_level === 2 &&
                        <div className="col-md-3">
                            <div className="card ticket-detail mb-4">
                                <div className="container-form">
                                    <div className="title">Cambiar estado</div>
                                    <form>
                                        <div className="input-box">

                                            <span>Seleccione una estado</span>
                                            <select onChange={readStatus} name="idNewStatus" >
                                                <option value="">Seleccione un estado</option>
                                                {statuses.map(status => (
                                                    <option key={status._id} value={status._id}>
                                                        {
                                                            status.name === "waiting" ? "En espera" :
                                                                status.name === "success" ? "Solucionado" :
                                                                    status.name === "rejected" && "Rechazado"
                                                        }
                                                    </option>
                                                ))}
                                            </select>
                                            <br></br>
                                            <button onClick={ChangeStatus} type="submit" className="btn btn-primary mt-2 ">Cambiar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }


                </div>
            </div>
            <h3>Respuestas</h3>
            <br></br>
            {(response.length !== 0) && response.map(ticketResponse => {
                return <TicketResponseRow
                    key={ticketResponse._id}
                    ticketResponse={ticketResponse}
                />
            })}
        </main>
    )
}