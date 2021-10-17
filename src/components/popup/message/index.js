import React from 'react';
import gravatar from '../../../utils/gravatar';

export const Message = ({ message }) => {

  return (

    <div className={message.user.auth_level == 1 ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={gravatar(message.user.email)}
        />
        <p className="messageText">{message.message}</p>
      </div>
      <div className="messageBottom"> {message.create_at}  </div>
    </div>

  )
}