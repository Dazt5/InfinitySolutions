import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../config/api';
import { DocumentCard } from './DocumentCard';
import './style.css';
import { Link } from 'react-router-dom';


export const DocumentList = ({ props }) => {

    const { idCorporation } = props.match.params;

    const [corporation, saveCorporation] = useState({});
    const [documents, saveDocuments] = useState([]);

    const getCorporationDocuments = async () => {
        try {

            const corporation = await apiAxios.get(`/corporation/${idCorporation}`);
            const { data } = await apiAxios.get(`/corporation/${idCorporation}/document`)

            saveDocuments(data.document);
            saveCorporation(corporation.data.corporation)

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {

        getCorporationDocuments();
        // eslint-disable-next-line
    }, [])

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Documentos de {corporation.name} </h2>
                        <Link to={`/admin/document/new/${idCorporation}`} className="btn btn-secondary">Agregar nuevo documento</Link>
                    </div>
                    {
                        documents.map(doc => (
                            <DocumentCard
                                key={doc._id}
                                doc={doc}
                                getCorporationDocuments={getCorporationDocuments}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )

}