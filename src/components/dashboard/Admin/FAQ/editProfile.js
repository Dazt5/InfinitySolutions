import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios, config } from '../../../../config/api';

export const changeinfo = ({ props }) => {

    const [Info, saveInfo] = useState({

        name: '',
        lastname: '',
        phone_number: ''

    });
    const [Infos, saveInfos] = useState({});

    const editInfo = async e => {
        e.preventDefault();

        try {
            const { data } = await apiAxios.patch(`/change/profile`, Info);

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

    const readData = e => {
        saveInfo({
            ...Info,
            [e.target.name]: e.target.value
        });
        saveInfos({

            ...Infos,
            [e.target.name]: e.target.value


        });

        console.log(Info);
    }

    useEffect(() => {

        const actualInfo = async () => {
            const { data } = await apiAxios.get(`/user`)

            saveInfos(data.user)
        }

        actualInfo();

    }, [])

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
                            value={Infos.name}
                            required />
                    </div>
                    <div className="input-box">
                        <span className="details">Apellido</span>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="title C.A"
                            onChange={readData}
                            value={Infos.lastname}
                            required />
                    </div>
                    <div className="input-box">
                        <span className="details">Numero Telefonico</span>
                        <input
                            type="text"
                            name="phone_number"
                            placeholder="0414-777777"
                            value={Infos.phone_number}
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

export const Changeinfo = withRouter(changeinfo)