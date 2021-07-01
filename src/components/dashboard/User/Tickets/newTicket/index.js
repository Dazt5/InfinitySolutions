import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../../../config/api';

const TicketForm = ({ props }) => {

    const { idCorporation } = props.match.params;

    const [ticket, saveTicket] = useState({
        subject: '',
        description: '',
        corporation: ''
    });

    const [corporations, saveCorporations] = useState([]);
    const [corporation, saveCorporation] = useState({});

    useEffect(() => {

        if (idCorporation) {
            const actualCorporation = async () => {
                try {
                    const { data } = await apiAxios.get(`/corporation/${idCorporation}`);

                    saveCorporation(data.corporation);
                    saveTicket({ corporation: data.corporation._id })

                } catch (error) {
                    props.history.push('/ticket')
                }
            }

            actualCorporation();
        } else {
            const setCorporation = async () => {
                try {
                    const { data } = await apiAxios.get('/corporation');

                    saveCorporations(data.corporation);
                } catch (error) {

                }
            }
            setCorporation();
        }

    }, [])

    const readData = e => {
        saveTicket({
            ...ticket,
            [e.target.name]: e.target.value
        });
    }

    const registerTicket = async e => {
        e.preventDefault();

        try {
            const { data } = await apiAxios.post('/ticket/new', ticket);
            Swal.fire({
                icon: 'success',
                title: 'Agregado Correctamente',
                text: data.message
            });
            props.history.push('/ticket')
        } catch (error) {
            Swal.fire(
                'Error en registro',
                error.response.data.message,
                'error'
            );
        }
    }

    console.log(ticket);

    return (
        <main>
            <div className="container-form">
                <div className="title">Registra la empresa</div>
                <form onSubmit={registerTicket}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Titulo del ticket</span>
                            <input
                                type="text"
                                name="subject"
                                placeholder="No Internet"
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box-large">
                            <span className="details">Descripción</span>
                            <input
                                type="text"
                                name="description"
                                placeholder="Descripcion de la incidencia"

                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">

                            {corporations.length
                                ?               
                                <>
                                    <span>Seleccione una empresa</span>
                                    <select name="corporation" onChange={readData} >
                                        <option value=""> Seleccione una corporación</option>
                                        {corporations.map(corp => (
                                            <option key={corp._id} value={corp._id}>{corp.name}</option>
                                        ))}
                                    </select>
                                </>
                                :
                                <>
                                    <span>Empresa seleccionada</span>
                                    <select disabled={true}>
                                        <option key={corporation._id} value={corporation._id}>{corporation.name}</option>
                                    </select>
                                </>
                            }
                        </div>
                    </div>
                    <div className="button-box">
                        <div className="button-form">
                            <input type="submit" value="Registrar" />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export const NewTicketForm = withRouter(TicketForm)