import React from 'react';
import dayjs from 'dayjs';

export const UserRow = ({ user }) => {


    return (

        <tr>
    
        <td>
                <p>{user.name}</p>
            </td>

            <td>
                <p>{user.lastname}</p>
            </td>

            <td>
                <p>{user.email}</p>
            </td>

            <td>
                <p>{user.phone_number}</p>
            </td>

            <td>
                <p>{dayjs(user.create_at).format('DD/MM/YYYY h:mm A')}</p>
            </td>

            <td>
                <p>{dayjs(user.last_access).format('DD/MM/YYYY h:mm A')}</p>
            </td>
        
    </tr>

       
    )

}