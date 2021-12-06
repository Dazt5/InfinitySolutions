import React, { Fragment, useState } from 'react';
import {apiAxios} from '../../../config/api';
import Swal from 'sweetalert2';
import { HttpRequestOnActionHandler } from '../../../utils/HttpHandler';

export const ResendActivateAccountForm = () => {

    const [email, saveEmail] = useState('');

    const readData = e => {
        saveEmail(e.target.value)
    }

    const sendLink = async e => {
        e.preventDefault();
        
        try {
            const { data } = await apiAxios.post('/activate', {email});

            Swal.fire(
                'Se ha procesado su solicitud',
                data.message,
                'success'
            );

        } catch (error) {
            HttpRequestOnActionHandler(error)
        }
    }

    return (

        <Fragment>
            <form onSubmit={sendLink}>
                <section className="copy">
                    <h2 className="authText">Ingrese su email</h2>
                    <div className="login-container">
                        <p className="authText">Ingrese el email registrado para reenvíar el link de activación</p>
                    </div>
                </section>

                <div className="input-container email">
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="juangarcia@email.com"
                        onChange={readData}
                    />
                </div>

                <button className="signup-btn" type="submit">
                    Enviar Email
                </button>
            </form>
        </Fragment>
    )

}