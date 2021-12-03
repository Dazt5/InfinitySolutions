import React, { Fragment } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime'
import gravatar from '../../../../../utils/gravatar';
import dayjs from 'dayjs';

export const Message = ({ message }) => {

    const { user } = message;
    dayjs.extend(relativeTime);

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