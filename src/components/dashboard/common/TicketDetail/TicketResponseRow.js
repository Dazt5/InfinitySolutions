import React from 'react';
import dayjs from 'dayjs';
import parser from 'html-react-parser';
import './style.css';

const TicketResponseRow = ({ ticketResponse }) => {

    return (
        <div className="card ticket-detail mb-4">
            <br></br>
            <h4>
                {ticketResponse.user.auth_level == 2 ? <span className="">
                    <i className="las la-id-card"></i>
                </span>
                    : <span className="">
                    </span>
                } {ticketResponse.user.lastname} {ticketResponse.user.name} (  {dayjs(ticketResponse.create_at).format('DD/MM/YYYY h:mm A')}) : {parser(ticketResponse.message)}
            </h4>
            <h5>
                {ticketResponse.user.email}
            </h5>
            <br></br>
        </div>
    )
}

export default TicketResponseRow;