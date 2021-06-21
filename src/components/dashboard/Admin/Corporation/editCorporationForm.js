import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios,config } from '../../../../config/api';

export const editCorporationForm = ({props}) => {

    const { id } = props.match.params;

    const [corporation, saveCorporation] = useState({
        name: '',
        rif: '',
        description: ''
    });

    const [image, saveImage] = useState('');


    const editCorporation = async e => {
        
        e.preventDefault();
        
        const corporationData = new FormData();

        corporationData.append('name', corporation.name);
        corporationData.append('rif', corporation.rif);
        corporationData.append('description', corporation.description);
        corporationData.append('image', image);

        try {

            const {data} = await apiAxios.put(`/corporation/${id}`, corporationData, {
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
                'Error en inicio de sesión',
                error.response.data.message,
                'error'
            );
        }

        props.history.push('/admin/corporation')

    }

    const readData = e => {

        saveCorporation({
            ...corporation,
            [e.target.name]: e.target.value
        });
    }

    const readImage = e => {
        saveImage(e.target.files[0]);
    }

    useEffect(() => {
        
        const actualCorporation = async () => {
    
            const { data } = await apiAxios.get(`/corporation/${id}`)
            

            saveCorporation(data.corporation)
            
            
        }

        actualCorporation();

    }, [])
    
    return (
        <main>
            <div className="container-form">
                <div className="title">Editar la empresa {corporation.name}</div>
                <form
                onSubmit={editCorporation}
                >
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Nombre de la empresa</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Cantv C.A"
                                onChange={readData}
                                value={corporation.name}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">RIF</span>
                            <input
                                type="text"
                                name="rif"
                                placeholder="J-12345678"
                                value={corporation.rif}
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">Descripción</span>
                            <select
                                name="description"
                                onChange={readData}
                                required
                                value={corporation.description}
                            >
                                <option value="Telecomunicaciones">Telecomunicaciónes</option>
                                <option value="Televisión">Televisión</option>
                                <option value="Telefonía" >Telefonía</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-box">
                        <span className="details">Imagen representativa o Logo </span>
                        <input
                            type="file"
                            onChange={readImage}
                            accept="image/png, image/gif, image/jpeg"
                        />
                        <small className="input-requeriment">Solo PNG y JPG</small>
                    </div>
                    <p>Imagen actual</p>
                    <img className="img-form" src={`${config.RESOURCES_API_URL}/${corporation.image || null}`}/>

                    <div className="button-box">
                        <div className="button-form">
                            <input type="submit" value="Editar"/>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )

}

export const EditCorporationForm = withRouter(editCorporationForm)