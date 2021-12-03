import React, { useEffect, useState, useRef } from 'react';
import { apiAxios } from '../../../config/api';
import {socketConnection} from '../../../utils/socket';
import { Message } from '../message/'

export const Messenger = () => {

  const [messages, setMessages] = useState([]);
  const [message, saveMessage] = useState("");
  const [idRoom, setRoom] = useState("");

  const getMessages = async () => {
    try {
      const message = await apiAxios.get('/chat');
      setRoom(message.data.room._id);
      setMessages(message.data.messages);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiAxios.post('/chat', { message });
      saveMessage('');
    } catch (error) {
      console.log(error);
    
    }
    saveMessage('');
  }

  socketConnection.on(`room-${idRoom}`, messages => {
    setMessages(messages);
  });

  useEffect(() => {
    getMessages();
  }, [idRoom])

  return (
    <div>
      <div className="chatBox">
        <div className="chatBoxWrapper">

          <div className="chatBoxTop">
            {messages.length > 0 &&
              messages.map(message => (
                <Message
                  key={message._id}
                  message={message}
                />
              ))
            }
          </div>
        </div>
      </div>
      <div>
        <div className="chatBoxBottom">
          <textarea
          value={message}
            className="chatMessageInput"
            placeholder="Escribe Algo..."
            onChange={(e) => saveMessage(e.target.value)}
          ></textarea>
          <button onClick={handleSubmit} className="chatSubmitButton">
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}