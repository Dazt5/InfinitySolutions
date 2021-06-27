import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../../config/api';

export const NewDocumentForm = ({ props }) => {

    const [fileDetails, saveFileDetails] = useState('');
    const [file, saveFile] = useState('');

    const { idCorporation } = props.match.params;


    const readFileDetails = e => {

        saveFileDetails(e.target.value);
    }

    const readFile = e => {
        saveFile(e.target.files[0]);
    }

    const sendFile = async e => {
        e.preventDefault();

        const fileData = new FormData();

        fileData.append('name', fileDetails);
        fileData.append('idCorporation', idCorporation);
        fileData.append('document', file);

        try {

            const { data } = await apiAxios.post('/corporation/document/new', fileData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            Swal.fire({
                icon: 'success',
                title: 'Agregado Correctamente',
                text: data.message
            });

            props.history.push(`/admin/document/${idCorporation}`)

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
                <div className="title">Subir un documento</div>
                <form onSubmit={sendFile}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Nombre descriptivo del archivo</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Solución errores 5xx"
                                onChange={readFileDetails}
                                required
                            />

                        </div>
                    </div>

                    <div className="input-box">
                        <span className="details">Archivo</span>
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={readFile}
                            required
                        />
                        <small className="input-requeriment">Solo archivos PDF</small>
                    </div>
                    <div className="button-box">
                        <div className="button-form">
                            <input type="submit" value="Subir archivo" />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )

}