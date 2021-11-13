import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import { apiAxios } from '../../../../config/api';
import { Context } from '../../../../context/Context';
import gravatar from '../../../../utils/gravatar';
import './style.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import TicketResponseRow from '../TicketDetail/TicketResponseRow';
import parse from 'html-react-parser';
import Swal from 'sweetalert2';

export const ChangeStatus = () => {
    const [statuses, saveStatuses] = useState([]);
    const [status, saveStatus] = useState({});
    const [auth] = useContext(Context);

    const readStatus = e => {
        saveStatus({
            ...status,
            [e.target.name]: e.target.value
        });
      
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

        } catch (error) {
            Swal.fire(
                'Error en registro',
                error.response.data.message,
                'error'
            );
        }
    }
    useEffect(() => {
    if (auth.user.auth_level === 2) {
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
}, [])
    return(
<div className="container-fluid mt-100">
                <div className="row">
{
                        auth.user.auth_level && auth.user.auth_level === 2 &&
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
                                                    <option key={status._id} value={status._id}>{status.name}</option>
                                                ))}
                                            </select>
                                            <br></br>
                                            <button onClick={ChangeStatus} type="submit" className="btn btn-primary">Reply</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    } 
</div>
</div>
    )
}