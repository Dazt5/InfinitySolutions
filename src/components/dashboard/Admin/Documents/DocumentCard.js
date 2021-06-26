import React from 'react';
import { apiAxios } from '../../../../config/api';
import FileDownload from 'js-file-download';

export const DocumentCard = ({ doc }) => {


    const downloadDocument = async e => {
        e.preventDefault();

        try {

            const document = await apiAxios.get(`/document/${doc._id}`, {
                responseType: 'blob'
            });

            console.log(document);

            FileDownload(document.data, `${doc.name}.pdf`);


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card">
                <a href="#" onClick={downloadDocument}>
                    <div className="card-body d-flex align-items-center">
                        <div className="icon">
                            <i className="las la-file-pdf"></i>
                        </div>
                        <div className="pl-3 data">
                            <p className="m-0">	Descargar {doc.name}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    )

}