import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import {apiAxios} from '../../../config/api';
import Swal from 'sweetalert2';
import './styles.css';

export const ActivateAcc = ({token,history}) => {

    const [activate, setActivate] = useState(false);

    useEffect(() => {

        const activateAccount = async () => {
            try {

                const { data } = await apiAxios.get(`/activate/${token}`)

                Swal.fire(
                    'Cuenta activada',
                    data.message,
                    'success'
                );

                setActivate(true);

                setTimeout(() => {
                    history.push('/login');
                }, 1500);

            } catch (error) {
                Swal.fire(
                    'Error en activación de cuenta',
                    error.response.data.message,
                    'error'
                );
                setActivate(false);
            }
        }

        activateAccount();
// eslint-disable-next-line
    }, [token]);

    return (
        <Fragment>
            {activate ?
                <div class="success-msg">
                    <i class="fa fa-check"></i>
                    <p className="authText">Su cuenta ha sido activada satisfactoriamente</p>
                </div>
                :
                <div class="error-msg">
                    <i class="fa fa-times-circle"></i>
                    <p className="authText">No se ha podido activar su cuenta</p>
                </div>
            }
        </Fragment>
    )
}

export const Activate = withRouter(ActivateAcc)