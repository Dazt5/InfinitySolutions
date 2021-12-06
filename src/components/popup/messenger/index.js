import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../config/api';
import { socketConnection } from '../../../utils/apisocket';
import { HttpRequestOnActionHandler } from '../../../utils/HttpHandler';
import { Message } from '../message/'

export const Messenger = ({ props }) => {

  const [messages, setMessages] = useState([]);
  const [message, saveMessage] = useState("");
  const [idRoom, setRoom] = useState("");

  const getMessages = async () => {
    try {
      const message = await apiAxios.get('/chat');
      setRoom(message.data.room._id);
      setMessages(message.data.messages);
    } catch (error) {
      HttpRequestOnActionHandler(error);
      props.history.push('/dashboard')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiAxios.post('/chat', { message });
      saveMessage('');
    } catch (error) {
      HttpRequestOnActionHandler(error);

    }
    saveMessage('');
  }

  socketConnection.on(`room-${idRoom}`, messages => {
    setMessages(messages);
  });

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line
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