import React, { useEffect, useState } from 'react';
import { apiAxios ,config} from '../../../../../config/api';
import CompanyCard from './CompanyCard';

export const CorporationList = () => {

    const [corporation, saveCorporation] = useState([]);

    useEffect(() => {
        const getCorporations = async () => {

            try {

                const { data } = await apiAxios.get('/corporation');

                const corporation = data.corporation;

                saveCorporation(corporation);

            } catch (error) {
                console.log(error);
            }
        }

        getCorporations();

    }, []);

    return (
            <div className="customers">
                <div className="card">
                    <div className="card-header">
                        <h2>Ultimas Empresas registradas</h2>
                    </div>

                    {corporation.map(corp => (

                        <CompanyCard
                            key={corp._id}
                            corp={corp} />
                    ))}

                </div>
            </div>
    )
}