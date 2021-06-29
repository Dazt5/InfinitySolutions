import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../../../../config/api';
import dayjs from 'dayjs';

export const Ticket = ({ ticket }) => {

    return (

        <li className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center"><i className="fa fa-check-circle checkicon"></i>
                <div className="ml-2">
                    <Link to={`/ticket/${ticket._id}`}><h6 className="mb-0">{ticket.subject}</h6></Link>
                    <div className="d-flex flex-row mt-1 text-black-50 date-time">
                        <div><i className="fa fa-calendar-o"></i><span>{ dayjs(ticket.create_at).format('DD/MM/YYYY')}</span></div>
                        <div className="ml-2"><i className="fa fa-clock-o time"></i><span>{ dayjs(ticket.create_at).format('hh:mm A')}</span></div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center">
                <div className="d-flex flex-column mr-2">
                    <div className="profile-image"><img className="rounded-circle" src={`${config.RESOURCES_API_URL}/${ticket.corporation.image}`} width="100" /></div>
                </div>
            </div>
        </li>

    )

}