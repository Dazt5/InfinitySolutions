import React from 'react';
import { apiAxios, config } from '../../../../config/api';
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../../../../context/Context';
import { useContext } from 'react';
import './style.css';
const FaqRow = ({ faq }) => {
    const [auth, saveAuth] = useContext(Context);
console.log(auth.user.auth_level);
    const deletefaq = async () => {
        try {

            await apiAxios.delete(`/corporation/FAQ/${faq._id}`);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <tr>
            <td></td>
            <td><a className="ticket-link" href="#">
                <h4>{faq.title}</h4>
            </a>
           
            </td>
            <br/>
            <td className="description">{faq.description}</td>
    <div className={auth.user.auth_level === 2 ?"admin" :"user"}>
    <td><span>
                <Link to={`/admin/faq/edit/${faq._id}`}><i className="las la-pen"></i></Link>
            </span></td>
            <td >
                <span >
                    <i className="las la-trash-alt" onClick={() => deletefaq()} ></i>
                </span>
            </td>

    </div>
        
          
        </tr>
    )

}

export default FaqRow;