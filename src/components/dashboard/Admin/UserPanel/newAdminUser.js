import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../../config/api';

const NewAdminForms = ({props}) => {

  
    const [adminUser, saveAdminuser] = useState({
        email:'',
        password: '',
        confirmPassword:'',
        name:'',
        lastname:'',
        phone_number:''
        
    });

    const readData = e => {
        saveAdminuser({
            ...adminUser,
            [e.target.name]: e.target.value
        }); 

    }

    const registeradminUser = async e => {

        e.preventDefault();

        try {

            const {data} = await apiAxios.post('/admin', adminUser);

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

    return (
        <main>
            <div className="container-form">
                <div className="title">Registra el usuario administrador</div>
                <form onSubmit={registeradminUser}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@mail.com"
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">password</span>
                            <input
                                type="password"
                                name="password"
                                
                                
                                onChange={readData}
                                required />
                        </div>

                        <div className="input-box">
                            <span className="details">confirm password</span>
                            <input
                                type="password"
                                name="confirmPassword"
                                
                                
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">name</span>
                            <input
                                type="text"
                                name="name"
                                
                                
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">last name</span>
                            <input
                                type="text"
                                name="lastname"
                                
                                
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">phone number</span>
                            <input
                                type="text"
                                name="phone_number"
                                
                                
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

export const NewAdminForm = withRouter(NewAdminForms)