import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export const TicketRow = ({ ticket }) => {

    return (
        <tr>
            <td><Link to={`/ticket/details/${ticket._id}`}>{ticket.subject}</Link></td>
            <td>{ticket.corporation.name}</td>
            <td>{dayjs(ticket.create_at).format('DD/MM/YYYY')}</td>
        </tr>
    )
}