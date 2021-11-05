import React from 'react';
import dayjs from 'dayjs';
import parser from 'html-react-parser';
import gravatar from '../../../../utils/gravatar';
import './style.css';

const TicketResponseRow = ({ ticketResponse }) => {

    return (
        <div className="messi">
            <div className="Container-reply">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="top">
                            <h5>  {dayjs(ticketResponse.create_at).format('DD/MM/YYYY h:mm A')}</h5>

                        </div>

                    </div>
                    <div className="col-sm-2">
                        <div className="InfoUser">
                            <div className="divi">


                                <img className="rounded-circle" src={gravatar(ticketResponse.user.email)} alt="sunil" />
                                <div className="left-align">

                                    <p>   {ticketResponse.user.name} <br /> {ticketResponse.user.lastname} </p>
                                    {ticketResponse.user.auth_level === 2
                                        ?
                                        <span className="red">Administrador</span>
                                        :
                                        <span className="profileInfoDesc">Usuario</span>
                                    }
                                    <br />
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="col-sm-10">
                        <h3 className="reply"> {parser(ticketResponse.message)}</h3>

                    </div>


                </div>


            </div>

        </div>
    )
}

export default TicketResponseRow;
/*

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

*/