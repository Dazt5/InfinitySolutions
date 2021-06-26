import React, { useEffect, useState } from 'react';
import { apiAxios, config } from '../../../../config/api';
import { DocumentCard } from './DocumentCard';
import './style.css';


export const DocumentList = ({ props }) => {

    const { idCorporation } = props.match.params;

    const [corporation, saveCorporation] = useState({});
    const [documents, saveDocuments] = useState([]);

    useEffect(() => {

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

        getCorporationDocuments();

    }, [])

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Documentos de {corporation.name} </h2>
                    </div>
                    {
                        documents.map(doc => (
                            <DocumentCard
                                key={doc._id}
                                doc={doc}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )

}