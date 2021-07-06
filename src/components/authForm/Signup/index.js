import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../config/api';

export const SignUpForm = () => {

    const [userData, saveData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        lastname: '',
        phone_number: '',
    });

    const readData = e => {
        saveData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const testEntry = (regex, input) => {
        return regex.test(input)
    }

    const validateData = () => {
        const { name, lastname, phone_number, email, password, confirmPassword } = userData
        const PHONE_REGEX = /^(\+)?([0-9]){8,16}$/;

        if (!name) {
            Swal.fire(
                'Datos incompletos',
                'Debe ingresar su nombre',
                'error'
            );
            return false;

        } else if (!lastname) {
            Swal.fire(
                'Datos incompletos',
                'Debe ingresar su apellido',
                'error'
            );
            return false;

        } else if (!phone_number) {
            Swal.fire(
                'Datos incompletos',
                'Debe ingresar un número teléfonico',
                'error'
            );
            return false;

        } else if (!testEntry(PHONE_REGEX, phone_number)) {
            Swal.fire(
                'Datos incompletos',
                'El numero ingresado no es válido \nEjemplo: +584146864680',
                'error'
            );
            return false;

        } else if (!email) {
            Swal.fire(
                'Datos incompletos',
                'Debe ingresar un correo electronico',
                'error'
            );
            return false;

        } else if (!password) {
            Swal.fire(
                'Datos incompletos',
                'Debe ingresar su contraseña',
                'error'
            );
            return false;

        } else if (!confirmPassword) {
            Swal.fire(
                'Datos incompletos',
                'Debe confirmar su contraseña',
                'error'
            );
            return false;

        } else if (password != confirmPassword) {
            Swal.fire(
                'Datos incompletos',
                'Las contraseñas no coinciden',
                'error'
            );
            return false;

        } else if (password.length < 8) {
            Swal.fire(
                'Datos incompletos',
                'La contraseña tiene que ser mayor a 8 caracteres',
                'error'
            );
            return false;
        }
        return true;
    }

    const signup = async (e) => {
        e.preventDefault();

        if (validateData()) {
            try {

                const { data } = await apiAxios.post('/signup', userData);
                Swal.fire(
                    'Registro satisfactorio',
                    data.message,
                    'success'
                );

            } catch (error) {
                Swal.fire(
                    'Error al registrar al usuario',
                    error.response.data.message,
                    'error'
                );
            }
        }
    }

    return (
        <form onSubmit={signup}>
            <section className="copy">
                <h2>Registro</h2>
                <div className="login-container">
                    <p>¿Ya estas registrado? <Link to={"/login"}> <strong>Inicia sesión</strong> </Link></p>
                </div>
            </section>

            <div className="input-container name">
                <label>Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Juan"
                    onChange={readData}
                    required
                />
            </div>
            <div className="input-container name">
                <label>Apellido</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Garcia"
                    onChange={readData}
                    required
                />
            </div>

            <div className="input-container name">
                <label>Numero de Teléfono</label>
                <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    placeholder="+584146258475"
                    onChange={readData}
                    required
                />
            </div>

            <div className="input-container email">
                <label>Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="juangarcia@email.com"
                    onChange={readData}
                    required
                />
            </div>

            <div className="input-container password">
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Must be at least 6 characters"
                    onChange={readData}
                    required
                />
                <i className="far fa-eye-slash"></i>
            </div>

            <div className="input-container password">
                <label>Confirma tu password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Must be at least 6 characters"
                    onChange={readData}
                    required
                />
                <i className="far fa-eye-slash"></i>
            </div>
            <button className="signup-btn" type="submit">
                Sign Up
            </button>

            <section className="copy legal">
                <p>
                    <span className="small">
                        By continuing, you agree to acept our
                        <br />
                        <a href="#">
                            Privacy Policy
                        </a>
                        &amp;
                        <a href="#">
                            Terms of Service
                        </a>.
                    </span>
                </p>
            </section>

        </form>
    )
}