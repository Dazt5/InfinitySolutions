import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../../../context/Context';

import { apiAxios } from '../../../config/api';

const Login = props => {

    const [auth,saveAuth] = useContext(Context);

    const [credentials, saveCredentials] = useState({});

    const readData = e => {
        saveCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = async (e) => {
        e.preventDefault();

        try {
            const { data } = await apiAxios.post('/login', credentials);

            const { token } = data;

            localStorage.setItem('token', token);

            saveAuth({
                auth: true,
                token
            });

            props.history.push('/dashboard');

        } catch (error) {
            Swal.fire(
                'Error en inicio de sesión',
                error.response.data.message,
                'error'
            );
        }
    }

    return (
        <form onSubmit={login}>
            <section className="copy">
                <h2>Iniciar sesion</h2>
                <div className="login-container">
                    <p>¿No estas registrado? <Link to={"/signup"}> <strong>Registrate</strong> </Link> </p>
                    <p>¿Su cuenta está desactivada? <Link to={"/send/activate"}> <strong>Active su cuenta</strong> </Link> </p>
                </div>
            </section>

            <div className="input-container email">
                <label>Correo Electronico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={readData}
                />
            </div>

            <div className="input-container password">
                <label>Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Minimo 8 caracteres"
                    onChange={readData}
                />
                <i className="far fa-eye-slash"></i>
            </div>

            <button
                className="signup-btn"
                type="submit"
            >
                Log In
            </button>
            <section className="copy">
                <div className="login-container">
                    <p> <Link to={"/send/recover"}> <strong>He olvidado mi contraseña</strong> </Link> </p>
                </div>
            </section>
        </form>
    )
}

export const LoginForm = withRouter(Login)