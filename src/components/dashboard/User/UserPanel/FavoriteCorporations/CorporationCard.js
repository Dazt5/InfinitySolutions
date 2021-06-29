import React from 'react';
import { config } from '../../../../../config/api';
import {Link} from 'react-router-dom'


export const CorporationCard = ({corp}) => {

    return (
        <div className="card-body">
            <div className="customer">
                <div className="info">
                    <img src={`${config.RESOURCES_API_URL}/${corp.image}`} width="60px" height="60px" />
                    <div className="contact">
                        <h4><Link to={`/corporation/${corp._id}`}>{corp.name}</Link></h4>
                        {corp.type && <small>{corp.type}</small>}
                    </div>
                </div>
            </div>
        </div>
    )


}