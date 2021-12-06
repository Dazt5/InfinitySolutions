import React, { Fragment } from 'react';
import { apiAxios } from '../../../../config/api';
import { Link } from 'react-router-dom';
import './style.css';
const FaqRow = ({ faq, getFaqs }) => {

    const user = JSON.parse(sessionStorage.getItem("user"));

    const deletefaq = async () => {
        try {

            await apiAxios.delete(`/corporation/FAQ/${faq._id}`);
            getFaqs();

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className={user.auth_level === 2 ? "admin" : "user"}>
                        <span>
                            <Link to={`/admin/faq/edit/${faq._id}`}><i className="las la-pen"></i></Link>
                        </span>
                        <span >
                            <i className="las la-trash-alt" onClick={() => deletefaq()} ></i>
                        </span>
                    </div>
                    <h4 className="mb-0 faq-title">{faq.title}</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 text-secondary">
                    <p className="faq-description">{faq.description}</p>
                </div>
            </div>

        </Fragment>

    )

}

export default FaqRow;