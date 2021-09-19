import React from 'react';
import gravatar from '../../../utils/gravatar';
import "./message.css";

export const Message = ({m,own}) => {

    return (

<div className= {own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={gravatar(m.user.email)}
          alt=""
        />
        <p className="messageText">{m.message}</p>
      </div>
      <div className="messageBottom">{m.create_at}  </div>
    </div>
     


    )
}