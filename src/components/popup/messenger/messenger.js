import React, { useEffect, useState, useContext, useRef } from 'react';
import { Context } from '../../../context/Context';
import "./messenger.css";
import "../message/message.css";

import { Message } from '../message/message';

import { apiAxios } from '../../../config/api';

export const Messenger = () => {

  const [user] = useContext(Context);

  const [messages, savemessages] = useState([]);
  const ScrollRef = useRef();

  const [newmessage, savenewmessage] = useState("");



  useEffect(() => {
    const getMessages = async () => {

      try {
        const message = await apiAxios.get('/chat');

        savemessages(message.data.messages);

      } catch (error) {
        console.log(error);
      }
    }
    getMessages();
  }, [])
  console.log(messages);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      message: newmessage
    }

    try {
      const res = await apiAxios.post('/chat', message);
      getMessages();
      savenewmessage("");

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    ScrollRef.current?.scrollIntoView({ behavior: "smooth" })

  }, [messages])
  return (
    <div>
      <div className="chatBox">
        <div className="chatBoxWrapper">

          <div className="chatBoxTop">
            {messages.map(message => (
              <div ref={ScrollRef} >
                <Message
                  m={message}
                  own={user.user._id === message.user._id}
                />

              </div>
            ))}

          </div>
        </div>
      </div>
      <div>
        <div className="chatBoxBottom">
          <textarea
            className="chatMessageInput"
            placeholder="Escribe Algo..."
            onChange={(e) => savenewmessage(e.target.value)}
            value={newmessage}
          ></textarea>
          <button onClick={handleSubmit} className="chatSubmitButton">
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}