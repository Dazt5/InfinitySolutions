import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiAxios, config } from '../../../../config/api';

import './style.css';
import gravatar from '../../../../utils/gravatar';
import adminIcon from '../../../../assets/static/admin.png';
import userIcon from '../../../../assets/static/user.jpg';
import dayjs from 'dayjs';

export const UserProfiles = ({ props }) => {

    const { idUser } = props.match.params;
   
    const [user, saveUser] = useState({});
    const [userr, saveUserr] = useState({});
   
   

    useEffect(() => {

     

        const user = async () => {
            try {

                const { data } = await apiAxios.get(`/user/profile/${idUser}`);
                
                saveUser(data.user);

            } catch (error) {
                console.log(error.request);
            }
        }
        user();

        const getUser = async () => {
            try {

                const { data } = await apiAxios.get(`/user`);
                
                saveUserr(data.user);

            } catch (error) {
                console.log(error.request);
            }
        }
        getUser();

    }, []);
    console.log(userr);
    return (
        <main>
            <div className="container">
                <div className="main-body">
                 
                    <div className="profile">
      
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            {userr
                    ?
                    userr.auth_level === 1
                        ?
                        <img   src={gravatar(userr.email)} className="profileUserImg" alt="Avatar" />
                        :
                        <img src={adminIcon} className="profileUserImg" alt="Avatar" />
                    :
                    <img src={userIcon} className="profileUserImg" alt="Avatar" />
                }
           
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{userr.name} {userr.lastname}</h4>
                {userr.auth_level === 2
                    ?
                <span className="profileInfoDesc">Administrador</span>
                :
                <span className="profileInfoDesc">Usuario</span>
            }
             <Link to={`/edit/profile`}><button className="btn btn-primary"> Editar</button></Link>
            </div>
          </div>
          <div className="profileRightBottom">
         
          </div>
        </div>
        
      </div>
      <div className="col-md-12">
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Email:</h6>
                                        <span className="text-secondary">{userr.email}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Numero Telefonico</h6>
                                        <span className="text-secondary">{userr.phone_number}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Ultimo Accesso</h6>
                                        <span className="text-secondary">{dayjs(userr.last_access).format('DD/MM/YYYY h:mm A')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>     
                </div>
            </div>
        </main>

    )
}