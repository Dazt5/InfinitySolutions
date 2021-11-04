import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios, config } from '../../../../../config/api';

export const CorporationCard = ({ corp }) => {

    const addFavorite = async () => {
        const idCorporation = corp._id;
        try {
            const { data } = await apiAxios.post('/favorite/new', { idCorporation });
            Swal.fire({
                icon: 'success',
                title: 'Agregado Correctamente',
                text: data.message
            });
        } catch (error) {
            if (error.response) {
                if (error.response.status) {
                    Swal.fire(
                        'Error',
                        error.response.data.message,
                        'error'
                    );
                }
            } else {
                Swal.fire(
                    'Error',
                    "Ha ocurrido un error inesperado",
                    'error'
                );
            }
        }
    }

    return (
        <div className="separator">
            <Link to={`/corporation/${corp._id}`}>
                <div className="card-corporation">
                    <img className="img-corp" src={`${config.RESOURCES_API_URL}/${corp.image}`} width="100%" height="100px" />
                    <div className="container">
                        <h4><b>{corp.name}</b></h4>
                        {corp.type && <p>{corp.type}</p>}
                    </div>
                </div>
            </Link>
            <div>
                <p className="add-favorite" onClick={addFavorite}>Agregar a favoritos</p>
            </div>
        </div>
    )
}