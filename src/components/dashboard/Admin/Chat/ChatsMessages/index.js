import React, { Fragment, useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import { Message } from './Message';

export const ChatsMessages = ({ idRoom }) => {

    const [messages, saveMessages] = useState([]);

    const getMessages = async () => {
        try {
            const { data } = await apiAxios.get(`/admin/chat/${idRoom}`)
            saveMessages(data.messages);

        } catch (error) {
            console.log("Error in get Messages type: " + error);
        }
    }


    useEffect(() => {

        getMessages();

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