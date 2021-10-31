import React from 'react';
import { apiAxios } from '../../../../config/api';
import FileDownload from 'js-file-download';
import Swal from 'sweetalert2';

export const DocumentCard = ({ doc,getCorporationDocuments }) => {

    const downloadDocument = async e => {
        e.preventDefault();

        try {

            const document = await apiAxios.get(`/document/${doc._id}`, {
                responseType: 'blob'
            });

            FileDownload(document.data, `${doc.name}.pdf`);


        } catch (error) {
            console.log(error);
        }
    }

    const deleteDocument = async e => {
        e.preventDefault();
        Swal.fire({
            title: '¿Desea eliminar el documento',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `No eliminar`,
        }).then((result) => {
            if (result.isConfirmed) {
                try {

                    apiAxios.delete(`/corporation/document/${doc._id}`);

                    Swal.fire('Eliminado', '', 'success')
                    getCorporationDocuments();

                } catch (error) {
                    console.log(error);
                }
            }
        })
    }

    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card">
                <div className="card-body d-flex align-items-center card-body-document">
                    <div className="icon">
                        <i className="las la-file-pdf"></i>
                    </div>
                    <div className="pl-3 data">
                        <p className="m-0 download-document" onClick={downloadDocument}>Descargar {doc.name}</p>
                    </div>
                    <div className="pl-3 data">
                        <i className="las la-minus-circle delete-document" onClick={deleteDocument}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}