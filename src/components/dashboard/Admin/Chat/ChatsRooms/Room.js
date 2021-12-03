import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime'
import gravatar from '../../../../../utils/gravatar';
import dayjs from 'dayjs';

export const Room = ({ room, selectRoom }) => {
    const { user } = room
    const { last_message } = room || null;
    dayjs.extend(relativeTime);

    return (
        <div className="chat_list active_chat" onClick={() => selectRoom(room._id)}>
            <div className="chat_people">
                <div className="chat_img"> <img src={gravatar(user.email)} alt={"user profile " + user.name + " " + user.lastname} /> </div>
                <div className="chat_ib">
                    <h5>{user.name} {user.lastname} <span className="chat_date">{last_message != null && dayjs().to(dayjs(room.last_message_at))}</span></h5>

                    {last_message != null ?
                        last_message.user.auth_level == 1 ?
                            <p>{last_message.user.name}: {last_message.message}</p>
                            :
                            <p>{last_message.message}</p>
                        :
                        null
                    }

                </div>
            </div>
        </div>
    )
}