import React from 'react';
import { apiAxios, config } from '../../../../config/api';
import { Link, withRouter } from 'react-router-dom';
import './style.css';
const FaqRow = ({ faq }) => {

    const user = JSON.parse(sessionStorage.getItem("user"));

    const deletefaq = async () => {
        try {

            await apiAxios.delete(`/corporation/FAQ/${faq._id}`);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <tr>

            <div className="row">

                <div className="col-sm-12">
                    <h4 className="mb-0">{faq.title}</h4>
                </div>

            </div>


            <div className="row">
                <div className="col-sm-12 text-secondary">
                    <td>{faq.description}</td>
                    <div className={user.auth_level === 2 ? "admin" : "user"}>
                        <td><span>
                            <Link to={`/admin/faq/edit/${faq._id}`}><i className="las la-pen"></i></Link>
                        </span></td>
                        <td >
                            <span >
                                <i className="las la-trash-alt" onClick={() => deletefaq()} ></i>
                            </span>
                        </td>

                    </div>
                </div>
            </div>

        </tr>
    )

}

export default FaqRow;