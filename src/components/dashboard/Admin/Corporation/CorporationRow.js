import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../../../config/api';

export const CorporationRow = ({ corp }) => {


    return (

        <Link to={`/corporation/${corp._id}`}>
            <div className="card-corporation">
                <img className="img-corp" src={`${config.RESOURCES_API_URL}/${corp.image}`} width="100%" height="100px" />
                <div className="container">
                    <h4><b>{corp.name}</b></h4>
                    {corp.description && <p>{corp.description}</p>}
                </div>
            </div>
        </Link>
    )


}