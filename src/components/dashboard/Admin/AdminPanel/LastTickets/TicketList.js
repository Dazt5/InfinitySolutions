import React from 'react';

const TicketRow = ({ticket}) => {

    return (
        <tr>
            <td><a className="ticket-link" href="#">{ticket.subject}</a></td>
            <td>{ticket.corporation.name}</td>
            <td>{ ticket.create_at}</td>
        </tr>
    )

}

export default TicketRow;

