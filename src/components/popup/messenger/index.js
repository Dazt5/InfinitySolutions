import React, { useEffect, useState, useRef } from 'react';
import { apiAxios } from '../../../config/api';
import { Message } from '../message/'

export const Messenger = () => {
  const [messages, savemessages] = useState([]);
  const [message, savenewmessage] = useState("");

  const getMessages = async () => {
    try {
      const message = await apiAxios.get('/chat');
      savemessages(message.data.messages);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiAxios.post('/chat', { message });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMessages();
  }, [])

  return (
    <div>
      <div className="chatBox">
        <div className="chatBoxWrapper">

          <div className="chatBoxTop">
            {messages.map(message => (
              <Message
                key={message._id}
                message={message}
              />
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
          ></textarea>
          <button onClick={handleSubmit} className="chatSubmitButton">
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}