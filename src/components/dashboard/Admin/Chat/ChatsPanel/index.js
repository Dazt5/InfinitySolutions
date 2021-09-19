import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../../config/api';
import { ChatsRooms } from '../ChatsRooms';
import { ChatsMessages } from '../ChatsMessages';

export const ChatPanel = () => {

    const [rooms, setRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const [idRoomSelected, setRoom] = useState('');
    const [newMessage, setMessage] = useState('');

    const getRooms = async () => {
        try {
            const { data } = await apiAxios.get('/admin/chat/room');
            setRooms(data.rooms);

        } catch (error) {
            console.log(error)
        }
    }

    const getMessages = async () => {
        try {
            const { data } = await apiAxios.get(`/admin/chat/${idRoomSelected}`)
            setMessages(data.messages)
        } catch (error) {
            console.log(error);
        }
    }

    const readMessage = e => {

        setMessage(e.target.value)
    }


    const sendMessage = async event => {
        event.preventDefault();

        try {

            const { data } = await apiAxios.post(`/admin/chat/${idRoomSelected}`, { newMessage })
            console.log(data);


        } catch (error) {
            console.log(error);
        }

        getMessages();
    }

    useEffect(() => {

        getRooms();

        if (idRoomSelected) {
            getMessages()
            console.log(1)
        }

    }, [idRoomSelected])

    return (
        <main>
            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                        <div className="headind_srch">
                            <div className="recent_heading">
                                <h4>Usuarios</h4>
                            </div>
                            <div className="srch_bar">
                                <div className="stylish-input-group">
                                    <input type="text" className="search-bar" placeholder="Search" />
                                    <span className="input-group-addon">
                                        <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                                    </span> </div>
                            </div>
                        </div>
                        <div className="inbox_chat">
                            {(rooms.length != 0) && rooms.map(room => {
                                return <ChatsRooms
                                    key={room._id}
                                    room={room}
                                    setRoom={setRoom}
                                />
                            })}
                        </div>
                    </div>
                    <div className="mesgs">
                        <div className="msg_history">
                            {(messages.length != 0) && messages.map(message => (
                                <ChatsMessages
                                    key={message._id}
                                    message={message}
                                />
                            ))}
                        </div>
                        <div className="type_msg">
                            <div className="input_msg_write">
                                <input
                                    type="text"
                                    className="write_msg"
                                    placeholder="Type a message"
                                    onChange={readMessage}
                                />
                                <button
                                    onClick={() => sendMessage(event)}

                                    className="msg_send_btn"
                                    type="button">
                                    <i
                                        className="fa fa-paper-plane-o"
                                        aria-hidden="true"

                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )


}