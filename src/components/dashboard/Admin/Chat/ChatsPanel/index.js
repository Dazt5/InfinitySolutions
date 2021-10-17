import React, { useState } from 'react';
import { ChatsRooms } from '../ChatsRooms';
import { ChatsMessages } from '../ChatsMessages';
import { ChatInputs } from '../ChatInputs';

export const ChatsPanel = () => {

    const [roomSelected, selectRoom] = useState('');


    
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