import React from 'react';
import { config } from '../../../../config/api';
import { Link } from 'react-router-dom';


export const CorporationRow = ({ corp }) => {

    return (
        <tr>
            <td >
                <img className="img-table" src={`${config.RESOURCES_API_URL}/${corp.image}`} />
            </td>
            <td><Link to={`/corporation/${corp._id}`}>{corp.name} </Link></td>
            <td>{corp.rif}</td>
            <td>{corp.description}</td>
            {corp.active === 1
                ?
                <td><span className="status resolve"></span>Activa</td>
                :
                <td><span className="status reject"></span>Retirada</td>
            }
            <td>
                <span>
                    <Link to={`/admin/corporation/edit/${corp._id}`}><i className="las la-pen"></i></Link>
                </span>
                <span className="">
                    <i className="las la-toggle-off"></i>
                </span>
            </td>
        </tr>
    )
}
