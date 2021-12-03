import React, { useState } from 'react';
import { apiAxios } from '../../../../../config/api';

export const ChatInputs = ({idRoom}) => {

    const [newMessage, setMessage] = useState('');

    const readMessage = e => {
        setMessage(e.target.value)
        console.log(newMessage)
    }


    const sendMessage = async () => {
        try {
            const { data } = await apiAxios.post(`/admin/chat/${idRoom}`, { newMessage })
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="type_msg">
            <div className="input_msg_write">
                <input
                    type="text"
                    className="write_msg"
                    placeholder="Type a message"
                    onChange={readMessage}
                />
                <button
                    onClick={() => sendMessage()}

                    className="msg_send_btn"
                    type="button">
                    <i
                        className="fa fa-paper-plane-o"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </div>
    )
}
