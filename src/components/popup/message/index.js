import React from 'react';
import gravatar from '../../../utils/gravatar';
import dayjs from 'dayjs';

export const Message = ({ message }) => {

  return (

    <div className={message.user.auth_level === 1 ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          alt={gravatar(message.user.email)}
          src={gravatar(message.user.email)}
        />
        <p className="messageText">{message.message}</p>
      </div>
      <div className="messageBottom"> {dayjs(message.create_at).format("DD/MM/YYYY h:mm A")}  </div>
    </div>

  )
}