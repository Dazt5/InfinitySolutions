import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../../config/api';

const FaqForms = ({ props }) => {

    const { idCorporation } = props.match.params;


    const [Faq, saveFaq] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {

        const actualCorporation = async () => {
            try {
                await apiAxios.get(`/corporation/${idCorporation}`);  

            } catch (error) {

                props.history.push('/dashboard')
            }
        }
        actualCorporation();
        // eslint-disable-next-line
    }, [])

    const readData = e => {
        saveFaq({
            ...Faq,
            [e.target.name]: e.target.value
        });
    }

    const registerFaq = async e => {

        e.preventDefault();

        try {

            const { data } = await apiAxios.post(`/corporation/${idCorporation}/FAQ`, Faq);

            Swal.fire({
                icon: 'success',
                title: 'Agregado Correctamente',
                text: data.message
            });

            props.history.push(`/corporation/${idCorporation}`)
        } catch (error) {
            Swal.fire(
                'Error en registro',
                error.response.data.message,
                'error'
            );
        }
    }

    return (
        <main>
            <div className="container-form">
                <div className="title">Registra la FAQ</div>
                <form onSubmit={registerFaq}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Titulo</span>
                            <input
                                type="text"
                                name="title"
                                placeholder="No Internet"
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">descripcion</span>
                            <input
                                type="text"
                                name="description"
                                placeholder="Descripcion de la incidencia"
                                onChange={readData}
                                required />
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

export const NewFaqForm = withRouter(FaqForms)