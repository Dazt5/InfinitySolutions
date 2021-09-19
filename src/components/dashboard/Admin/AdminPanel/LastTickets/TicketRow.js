import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';


const TicketRow = ({ ticket }) => {

    return (
        <tr>
            <td><Link to={`/ticket/${ticket._id}`}>{ticket.subject}</Link></td>
            <td>{ticket.corporation.name}</td>
            <td>{dayjs(ticket.create_at).format('DD/MM/YYYY h:mm A')}</td>
        </tr>
    )

}

export default TicketRow;

