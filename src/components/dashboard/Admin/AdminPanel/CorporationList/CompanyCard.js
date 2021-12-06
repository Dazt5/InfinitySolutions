import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../../../../config/api';


const CompanyCard = ({corp}) => {
    
    return (
        <div className="card-body">
        <div className="customer">
            <div className="info">
                    <img src={`${config.RESOURCES_API_URL}/${corp.image}`} width="60px" height="60px" alt={"icon " + corp.name}/>
                <div className="contact">
                    <h4><Link to={`/corporation/${corp._id}`}>{corp.name}</Link></h4>
                        {corp.description && <small>{corp.description}</small>}
                </div>
            </div>
        </div>
    </div>
    )
}

export default CompanyCard;