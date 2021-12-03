import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../../config/api';

export const CorporationForm = (props) => {

    const [corporation, saveCorporation] = useState({
        name: '',
        rif: '',
        type: ''
    });

    const [image, saveImage] = useState('');

    const readData = e => {

        saveCorporation({
            ...corporation,
            [e.target.name]: e.target.value
        });
    }

    const readImage = e => {
        saveImage(e.target.files[0]);
    }

    const registerCorporation = async e => {

        e.preventDefault();

        const corporationData = new FormData();

        corporationData.append('name', corporation.name);
        corporationData.append('rif', corporation.rif);
        corporationData.append('type', corporation.type);
        corporationData.append('image', image);

        try {

            const {data} = await apiAxios.post('/corporation/new', corporationData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

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

        props.history.push('/admin/corporation')

    }

    return (
        <main>
            <div className="container-form">
                <div className="title">Registra la empresa</div>
                <form onSubmit={registerCorporation}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Nombre de la empresa</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Cantv C.A"
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">RIF</span>
                            <input
                                type="text"
                                name="rif"
                                placeholder="J-12345678"
                                defaultValue="J-"
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">Tipo de empresa</span>
                            <select
                                name="type"
                                onChange={readData}
                                required
                            >
                                <option defaultValue value="">--- Seleccione ----</option>
                                <option value="Telecomunicaciones">Telecomunicaciónes</option>
                                <option value="Televisión">Televisión</option>
                                <option value="Telefonía" >Telefonía</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-file">
                        <span className="details">Imagen representativa o Logo </span>
                        <input
                            type="file"
                            onChange={readImage}
                            accept="image/png, image/gif, image/jpeg"
                            required />
                        <small className="input-requeriment">Solo PNG y JPG</small>
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

export const NewCorporationForm = withRouter(CorporationForm)