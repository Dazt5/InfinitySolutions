import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import { CorporationCard } from './CorporationCard';

export const FavoriteCorporations = () => {

    const [favorites, saveFavorites] = useState([]);

    useEffect(() => {

        const getFavoriteCorporations = async () => {

            try {

                const { data } = await apiAxios('/favorite');

                saveFavorites(data.favorite);
                
            } catch (error) {

            }
        }

        getFavoriteCorporations();

    }, [])

    console.log(favorites);

    return (
        <div className="customers">
            <div className="card-table">
                <div className="card-header">
                    <h2>Empresas Favoritas</h2>
                </div>

                {favorites.map(({corporation}) => (

                <CorporationCard
                    key={corporation._id}
                    corp={corporation} />
            ))}

            </div>
        </div>
    )
}