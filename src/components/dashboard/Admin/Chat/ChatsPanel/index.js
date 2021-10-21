import React, { useState } from 'react';
import { ChatsRooms } from '../ChatsRooms';
import { ChatsMessages } from '../ChatsMessages';
import { ChatInputs } from '../ChatInputs';
import { apiAxios } from '../../../../../config/api';

export const ChatsPanel = () => {

    const [roomSelected, selectRoom] = useState('');

    const desactivateRoom = async () => {
        try {
            const { data } = await apiAxios.post(`/admin/chat/desactivate/${roomSelected}`)
            console.log(data);

            selectRoom('');
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <main>
            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                        <div className="headind_srch">
                            <div className="recent_heading">
                                <h4>Usuarios</h4>
                            </div>
                            {roomSelected.length > 0 && <button className="desactivate-room-button" type="button" onClick={() => desactivateRoom()}>Desactivar</button> }
                        </div>
                        <ChatsRooms
                            selectRoom={selectRoom}
                        />
                    </div>
                    <div className="mesgs">
                        {
                            roomSelected.length > 0 ?
                                <ChatsMessages
                                    idRoom={roomSelected}
                                />
                                :
                                <div className="msg_history">
                                    <p>Seleccione una sala</p>
                                </div>
                        }
                        {
                            roomSelected.length > 0 &&
                            <ChatInputs
                                idRoom={roomSelected}
                            />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}