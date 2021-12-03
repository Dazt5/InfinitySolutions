import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../../config/api';

export const Changeinfos = ({ props }) => {

    const [Info, saveInfo] = useState({
        name: '',
        lastname: '',
        phone_number: ''
    });
 
    const actualInfo = async () => {
        const { data } = await apiAxios.get(`/user`)

        const { name, lastname, phone_number } = data.user;

        saveInfo({ name, lastname, phone_number });
    }

    useEffect(() => {

        actualInfo();

    }, []);

    const editInfo = async e => {
        e.preventDefault();

        try {
            const { data } = await apiAxios.patch(`/change/profile`, Info);

            Swal.fire({
                icon: 'success',
                title: 'Agregado Correctamente',
                text: data.message
            });

            props.history.push("/dashboard");

        } catch (error) {
            console.log(error.request);
            Swal.fire(
                'Error en registro',
                error.response.data.message,
                'error'
            );

        }
    }

    const readData = e => {
        saveInfo({
            ...Info,
            [e.target.name]: e.target.value
        });
    }



    return (
        <div className="container-form">

            <form
                onSubmit={editInfo}
            >
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Nombre </span>
                        <input
                            type="text"
                            name="name"
                            placeholder="title C.A"
                            onChange={readData}
                            value={Info.name}
                            required />
                    </div>
                    <div className="input-box">
                        <span className="details">Apellido</span>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="title C.A"
                            onChange={readData}
                            value={Info.lastname}
                            required />
                    </div>
                    <div className="input-box">
                        <span className="details">Numero Telefonico</span>
                        <input
                            type="text"
                            name="phone_number"
                            placeholder="0414-777777"
                            value={Info.phone_number}
                            onChange={readData}
                            required />
                    </div>

                </div>

                <div className="button-box">
                    <div className="button-form">
                        <input type="submit" value="Editar" />
                    </div>
                </div>
            </form>
        </div>

    )

}

export const Changeinfo = withRouter(Changeinfos)