import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../../../config/api';
import { ChatsRooms } from '../ChatsRooms';
export const ChatPanel = () => {

    const [rooms, setRooms] = useState([]);

    const [idRoom, setIdRoom] = useState('');

    const getRooms = async () => {

        try {
            const { data } = await apiAxios.get('admin/chat/room');
            setRooms(data.rooms);
            
        } catch (error) {
            Swal.fire(
                'Error en registro',
                error.response,
                'error'
            );
        }
    }

    useEffect(() => {
        
        getRooms();

    }, [])


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
                                    
                                    />
                                
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )


}