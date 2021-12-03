import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import { CorporationCard } from './CorporationCard';

export const CorporationCards = () => {

    const [corporation, saveCorporation] = useState([]);

    const getCorporations = async () => {

        try {

            const { data } = await apiAxios.get('/corporation');

            saveCorporation(data.corporation);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCorporations();

    }, [])

    return (
        <main>
            <div className="card-header sections">
                <h2 className="header-text">Nuestras Compañias</h2>

            </div>
            <div className="cards">
                {corporation.map(corp => {

                    if (corp.active === 1) {
                        return <CorporationCard
                            key={corp._id}
                            corp={corp}
                        />
                    }
                })}
            </div>
        </main>
    )
}