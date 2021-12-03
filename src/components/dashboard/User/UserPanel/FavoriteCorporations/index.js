import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import { CorporationCard } from './CorporationCard';
import Swal from 'sweetalert2';

export const FavoriteCorporations = () => {

    const [favorites, saveFavorites] = useState([]);

    const getFavoriteCorporations = async () => {
        try {
            const { data } = await apiAxios('/favorite');
            saveFavorites(data.favorite);
        } catch (error) {

        }
    }

    useEffect(() => {

        getFavoriteCorporations();

    }, [])

    const deleteFavorite = async (idCorp) => {
        try {
            const { data } = await apiAxios.delete(`/favorite/${idCorp}`);
            getFavoriteCorporations();
            Swal.fire({
                icon: 'success',
                title: 'Eliminada Correctamente',
                text: data.message
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="customers">
            <div className="card-table">
                <div className="card-header">
                    <h2>Empresas Favoritas</h2>
                </div>

                {favorites.map(({ corporation }) => (

                    <CorporationCard
                        key={corporation._id}
                        corp={corporation}
                        deleteFavorite={deleteFavorite}
                    />
                ))}

            </div>
        </div>
    )
}