import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import { socketConnection } from '../../../../../utils/apisocket';
import { Message } from './Message';

export const ChatsMessages = ({ idRoom }) => {

    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        try {
            const { data } = await apiAxios.get(`/admin/chat/${idRoom}`)
            setMessages(data.messages);

        } catch (error) {
            console.log("Error in get Messages type: " + error);
        }
    }


    useEffect(() => {

        getMessages();

        socketConnection.on(`room-${idRoom}`, messages => {
            setMessages(messages);
        });
        // eslint-disable-next-line
    }, [idRoom])

    return (
        <div className="msg_history">
            {
                (messages.length > 0) ?
                    messages.map(message => (
                        <Message
                            key={message._id}
                            message={message}
                        />
                    ))
                    :
                    <p>No hay mensajes recientes</p>
            }
        </div>


    )
}