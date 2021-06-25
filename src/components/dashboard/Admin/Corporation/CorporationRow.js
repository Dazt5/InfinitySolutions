import React from 'react';
import { apiAxios, config } from '../../../../config/api';
import { Link, withRouter } from 'react-router-dom';

const corporationRow = ({ desactiveCorporation, corp }) => {


    return (
        <tr>
            <td >
                <img className="img-table" src={`${config.RESOURCES_API_URL}/${corp.image}`} />
            </td>
            <td><Link to={`/corporation/${corp._id}`}>{corp.name} </Link></td>
            <td>{corp.rif}</td>
            <td>{corp.type}</td>
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
                {corp.active === 1
                    ?
                    <span className="">
                        <i className="las la-toggle-on" onClick={() => desactiveCorporation(corp._id)}></i>
                    </span>
                    :
                    <span className="">
                        <i className="las la-toggle-off" onClick={() => desactiveCorporation(corp._id)}></i>
                    </span>
                }

            </td>
        </tr>
    )
}

export const CorporationRow = withRouter(corporationRow)
