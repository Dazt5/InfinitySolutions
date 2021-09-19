import React, { Fragment } from 'react';
import dayjs from 'dayjs';
import gravatar from '../../../../../utils/gravatar';

export const ChatsMessages = ({ message }) => {

    const { user } = message;
    console.log(user);

    return (
        <Fragment>
            {user.auth_level == 1 ?
                <div className="incoming_msg">
                    <div className="incoming_msg_img"> <img src={gravatar(user.email)} alt="sunil" /> </div>
                    <div className="received_msg">
                        <div className="received_withd_msg">
                            <p>{message.message}</p>
                            <span className="time_date">{dayjs(message.create_at).format('DD/MM/YYYY h:mm A')}</span></div>
                    </div>
                </div>
                :
                <div className="outgoing_msg">
                    <div className="sent_msg">
                        <p>{message.message}</p>
                        <span className="time_date"> {dayjs(message.create_at).format('DD/MM/YYYY h:mm A')}</span> </div>
                </div>
            }
        </Fragment>
    )
}