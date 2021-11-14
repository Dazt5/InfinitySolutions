import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {apiAxios} from '../../../config/api';
import Swal from 'sweetalert2';

export const RecoverAccountForm = ({props}) => {

    const [passwords, savePasswords] = useState({});
    const [validToken, setValid] = useState(false);

    const { token } = props.match.params;

    const readData = e => {
        savePasswords({
            ...passwords,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {

        const verifyToken = async () => {

            try {
                await apiAxios.get(`/recover/${token}`)
                setValid(true);
            } catch (error) {
                setValid(false);
                Swal.fire(
                    'Error en recuperación',
                    error.response.data.message,
                    'error'
                );
            }
        }
        verifyToken();
    }, [])

    const recoverPassword = async e => {
        e.preventDefault();

        try {

            const { data } = await apiAxios.post(`/recover/${token}`,passwords)

            Swal.fire(
                'Contraseña cambiada',
                data.message,
                'success'
            );

            setTimeout(() => {
                props.history.push('/login');
            }, 1500);

        } catch (error) {
            console.log(error)
            Swal.fire(
                'Error en recuperación',
                error.response.data.message,
                'error'
            );
        }
    }

    return (
        <Fragment>
            {validToken
                ?
                <form onSubmit={recoverPassword}>
                    <section className="copy">
                        <h2 className="authText">Recuperación de Contraseña</h2>
                        <div className="login-container">
                            <p></p>
                        </div>
                    </section>

                    <div className="input-container password">
                        <label>Nueva contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Minimo 8 caracteres"
                            onChange={readData}
                        />
                    </div>

                    <div className="input-container password">
                        <label>Repita su contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Minimo 8 caracteres"
                            onChange={readData}
                        />
                    </div>

                    <button className="signup-btn" type="submit">
                        Cambiar contraseña
                </button>
                </form>
                :
                <h3><Link to={"/send/recover"}>Volver a intentar la recuperación</Link></h3>
            }
        </Fragment>
    )
}

export const RecoverAccount = withRouter(RecoverAccountForm)